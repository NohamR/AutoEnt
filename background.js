chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.updateBadge) {
      chrome.action.setBadgeText({ text: request.badgeText });
      chrome.action.setBadgeBackgroundColor({ color: [49, 102, 136, 255] });

      setTimeout(function() {
          chrome.action.setBadgeText({ text: '' });
      }, 4000);
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'loading') {
    const matchesURL = /^https:\/\/(ent\.iledefrance\.fr|iledefrance\.fr)\//.test(tab.url);

    chrome.action.setIcon({
      tabId: tabId,
      path: matchesURL ? {
        "16": "images/icon16.png",
        "48": "images/icon48.png",
        "128": "images/icon128.png"
      } : {
        "16": "images/grey/icon16.png",
        "48": "images/grey/icon48.png",
        "128": "images/grey/icon128.png"
      }
    });
  }
});