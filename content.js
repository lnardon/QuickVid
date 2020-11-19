// Script Listener to modify theme
function gotMessage(message, sender, sendResponse) {
  document.querySelector("video").playbackRate = message;
}
chrome.runtime.onMessage.addListener(gotMessage);
