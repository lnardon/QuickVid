function handleClick() {
  const speed = document.getElementById("speed").value;
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, speed);
  });
}

function handleChange(e) {
  document.getElementById("selectedSpeed").innerText = e.target.value + "x";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("applyBtn").addEventListener("click", handleClick);
  document.getElementById("speed").addEventListener("input", handleChange);
});
