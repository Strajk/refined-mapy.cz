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

  const MAP_SETS_MAPPING = {
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

    // Ignore when inside input fields
    if (["INPUT"].includes(keyboardEvent.target.tagName)) return // ignore

    // try parsing to number
    const keyAsNumber = Number(keyboardEvent.key)
    if (typeof keyAsNumber === "number" && !Number.isNaN(keyAsNumber)) {
      // 1 is the whole Earth, 8 is the whole Czech Republic, so for planning 8 is the lowest meaningful zoom
      const LOWEST_MEANINGFUL_ZOOM = 8
      window.Mapy.getComponent("pois")._map.setZoom(keyAsNumber + LOWEST_MEANINGFUL_ZOOM)
      return
    }

    const mapped = MAP_SETS_MAPPING[keyboardEvent.key]
    if (mapped) window.Mapy.getComponent("mapsetswitch")._setMapset(mapped)

    if (keyboardEvent.key === "p") window.Mapy.getComponent("layercontrol").togglePano()
    if (keyboardEvent.key === "o") window.Mapy.getComponent("layercontrol")._open3d()
  })
} catch (e) {
  console.warn(`[refined-mapy.cz] Failed module: map-switch-shortcuts: ${e}`)
}
