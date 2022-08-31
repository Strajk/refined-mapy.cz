/* eslint-disable quote-props */

try {
  // copy(window.Mapy.Config.mapSets.map(x => x.seo))
  const MAP_SETS = {
    "zakladni": "zakladni",
    "turisticka": "turisticka",
    "letni": "letni",
    "zimni": "zimni",
    "fotografie": "fotografie",
    "letecka": "letecka",
    "letecka-2015": "letecka-2015",
    "letecka-2012": "letecka-2012",
    "letecka-2006": "letecka-2006",
    "letecka-2003": "letecka-2003",
    "dopravni": "dopravni",
    "uzavirky": "uzavirky",
    "zemepisna": "zemepisna",
    "19stoleti": "19stoleti",
    "hapticka": "hapticka",
    "vylety": "vylety",
    "mapari": "mapari",
    "testovaci": "testovaci",
    "testik": "testik",
    "appka-offline": "appka-offline",
    "appka-online": "appka-online",
    "appka-doprava-offline": "appka-doprava-offline",
    "appka-doprava-online": "appka-doprava-online",
    "appka-zima-offline": "appka-zima-offline",
    "appka-zima-online": "appka-zima-online",
    "cesko": "cesko",
    "prazdna-turist": "prazdna-turist",
    "letecka-prazdna": "letecka-prazdna",
    "prazdna": "prazdna",
    "skimapa": "skimapa",
    "textova": "textova",
    "zimni-prazdna": "zimni-prazdna",
    "ceskoza100": "ceskoza100",
    "stream": "stream",
    "dopravni-zpravy": "dopravni-zpravy",
    "mhd": "mhd",
    "skiarealy": "skiarealy",
    "sreality_pois": "sreality_pois",
  }

  const MAPPING = {
    q: MAP_SETS.zakladni,
    w: MAP_SETS.turisticka,
    e: MAP_SETS.letecka,
    r: MAP_SETS.zemepisna, // geographical
  }

  window.JAK.Events.addListener(document, "keydown", undefined, (keyboardEvent) => {
    /*
      altKey: false
      ctrlKey: false
      metaKey: false
      shiftKey: false
      key: "a"
      target: body.lang-en
    */

    if (["INPUT"].includes(keyboardEvent.target.tagName)) {
      return // ignore
    }

    const mapped = MAPPING[keyboardEvent.key]

    window.Mapy.getComponent("mapsetswitch")._setMapset(mapped)
  })
} catch (e) {
  console.warn(`[refined-mapy.cz] Failed module: map-switch-shortcuts: ${e}`)
}
