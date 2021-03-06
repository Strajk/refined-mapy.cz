<img align="right" width="300" src="assets/exported/promo-large.png" align="right"/>

# Refined Mapy.cz

> Refines Mapy.cz interface and adds useful features

## Install

* [Chrome extension from Chrome Web Store](https://chrome.google.com/webstore/detail/ekolhceminigjalkpbbajnippfomegcc)
* Firefox add-on – TODO 👷‍
* Safari extension – probably not gonna happen, TBH
* [Userscript](https://cdn.jsdelivr.net/gh/strajk/refined-mapy.cz@master/greasemonkey.user.js)
* <details><summary><a href="https://en.wikipedia.org/wiki/Bookmarklet">Bookmarklet</a></summary><pre><code>
   javascript:{const s = document.createElement("script"); s.src = 'https://cdn.jsdelivr.net/gh/strajk/refined-mapy.cz@master/load.js'; s.type = 'text/javascript'; document.body.appendChild(s);};void(0);
   </code></pre></details>

## Features

#### Condensed Map interface 🗺

Redundant controls hidden, the rest made more compact and unified. Hidden hefty text descriptions. Hidden paid Points of interest.

![Condensed Map interface](./assets/exported/feature-map-condensed.png)

#### Condensed Sidebar interface 🧩

Reduced size of lot of elements to fit more content, especially saved routes.

![Condensed Sidebar interface](./assets/exported/feature-sidebar-condensed.png)

#### Keyboard shortcuts 🕹

Keyboard shortcuts for fast map type switching (<kbd>Q</kbd> Basic, <kbd>W</kbd> Outdoor, <kbd>E</kbd> Aerial)

![Keyboard shortcuts](./assets/exported/feature-shortcuts.png)


## Future Features 🧠💡🙈

* Keyboard shortcuts for zooming (relative & absolute)
* Shortcut to Street View (Panorama)
* When drag'n'dropping gpx routes, change colors
* Preview route on hover
* Zoom to fit

## Contribute

Feel free to! 🙏

1️⃣ `npm i`

2️⃣ `npm develop`

3️⃣ load unpacked extension from `./build` into Chrome

## Inspiration

* [refined-hacker-news](https://github.com/plibither8/refined-hacker-news)
* [refined-github](https://github.com/sindresorhus/refined-github)
* [strava-map-switcher](https://github.com/liskin/strava-map-switcher)
  * Bookmarklet & Userscripts support

