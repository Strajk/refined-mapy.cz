const ID = "__INJECTED__"

function injectOnce () {
  if (!document.getElementById(ID)) {
    const script = document.createElement("script")
    script.setAttribute("id", ID)
    script.setAttribute("type", "text/javascript")
    script.src = chrome.extension.getURL("injected.js")
    document.documentElement.appendChild(script)
  }
}

if (document.readyState !== "complete") {
  window.addEventListener("load", injectOnce)
} else {
  injectOnce()
}
