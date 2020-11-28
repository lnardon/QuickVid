// Script Listener to modify speed
function gotMessage(message, sender, sendResponse) {
  if (message.type === "SET") {
    document.querySelector("video").playbackRate = message.value;
  } else {
    sendResponse(document.querySelector("video").playbackRate);
  }
}

chrome.runtime.onMessage.addListener(gotMessage);
