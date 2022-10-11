chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./foreground_styles.css"]
        }).then(() => {
            console.log('foreground_styles.css injected')

            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ["./foreground.js"]
            }).then(() => {
                console.log('foreground.js injected')
            })
        }).catch(err => console.log(err))
    }
})