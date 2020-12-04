function handleClick() {
  const speed = document.getElementById("speed").value;
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: "SET", value: speed });
  });
}

function handleLoad() {
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: "GET" }, (e) => {
      if (e) {
        document.getElementById("selectedSpeed").innerText = e + "x";
        document.getElementById("speed").value = e;
      }
    });
  });
}

function handleChange(e) {
  document.getElementById("selectedSpeed").innerText = e.target.value + "x";
}

document.addEventListener("DOMContentLoaded", () => {
  handleLoad();
  document.getElementById("applyBtn").addEventListener("click", handleClick);
  document.getElementById("speed").addEventListener("input", handleChange);
});
