window.onload = () => {
  //   const theme = localStorage.getItem("quickVidSpeed");
};

function handleClick() {
  const speed = 3;
  localStorage.setItem("notionTheme", JSON.stringify(theme));
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, speed);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("applyBtn").addEventListener("click", handleClick);
});
