chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo && changeInfo.status == "complete") {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      chrome.tabs.sendMessage(tabId, { data: tab }, function (response) {
        console.log(response);
      });
    }
  }
});
