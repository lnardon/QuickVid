// Script Listener to modify speed
function gotMessage(message, sender, sendResponse) {
  document.querySelector("video").playbackRate = message;
}
chrome.runtime.onMessage.addListener(gotMessage);
