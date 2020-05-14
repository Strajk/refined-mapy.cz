if (process.env.NODE_ENV === "development") {
  chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
    if (info.url === `http://localhost/reloadExtension?id=${require("./../package.json").name}`) {
      chrome.tabs.remove(tabId)
      chrome.runtime.reload()
    }
  })
}
