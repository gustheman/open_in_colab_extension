chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
        if (tab && tab.url) {
            checkNotebookUrl(tab); // Pass the URL to checkNotebookUrl
        }
        else {
            console.log("no URL!!!!");
        }
    });
});

function checkNotebookUrl(tab) {
    if (tab.url.includes('github.com') && tab.url.includes('/blob/') && tab.url.endsWith('.ipynb')) {
        chrome.action.setPopup({ tabId: tab.id, popup: "popup.html" }); // Show popup
        chrome.action.setBadgeBackgroundColor({ color: [255, 0, 0, 255] }); // Red color
        chrome.action.setBadgeText({ text: " " }); // Use a space to create a dot 
        chrome.action.enable(tab.id);
    } else {
        chrome.action.setPopup({ tabId: tab.id, popup: "" }); // Hide popup
        chrome.action.setBadgeText({ text: "" });
        chrome.action.disable(tab.id);
    }
}