// ==UserScript==
// @name refined-mapy.cz
// @description Refines Mapy.cz interface and adds useful features
// @match https://*.mapy.cz/*
// @downloadURL https://cdn.jsdelivr.net/gh/strajk/refined-mapy.cz@master/greasemonkey.user.js
// ==/UserScript==

{
  const el = document.createElement("script")
  el.src = "https://cdn.jsdelivr.net/gh/strajk/refined-mapy.cz@master/load.js"
  el.type = "text/javascript"
  document.body.appendChild(el)
}
