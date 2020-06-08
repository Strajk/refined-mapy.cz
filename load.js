{
  const baseUrl = "https://cdn.jsdelivr.net/gh/strajk/refined-mapy.cz@master/"
  function injectScript (url) {
    return new Promise((resolve, reject) => {
      const el = document.createElement("script")
      el.src = url
      el.async = true
      el.type = "text/javascript"
      el.onerror = reject
      el.onload = resolve
      document.body.appendChild(el)
    })
  }

  function injectCss (url) {
    return new Promise((resolve, reject) => {
      const el = document.createElement("link")
      el.href = url
      el.type = "text/css"
      el.rel = "stylesheet"
      el.onerror = reject
      el.onload = resolve
      document.getElementsByTagName("head")[0].appendChild(el)
    })
  }

  Promise.all([
    injectScript(`${baseUrl}build/injected.js`),
    injectCss(`${baseUrl}build/content.css`),
  ])
}
