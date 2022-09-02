try {
  window.Scene.handleEvent = function handleEventCustom (event) {
    // Keep the same as original
    switch (event.type) {
      case "dragover":
      case "dragstart":
        event.preventDefault()
        break
      case "drop":
        event.preventDefault()
        // Here, we completely override the original function with custom logic
        // It's quite ok, cause importing GPX files can be done also by Tool > Import GPX,
        // so dropping GPX file on map can be repurposed solely for our needs
        var file = event.dataTransfer && event.dataTransfer.files ? event.dataTransfer.files[0] : undefined // Let's not support multiple files just yet
        var fileName = file.name // e.g. "my-trip.gpx"
        var fileType = file.type // e.g. "application/gpx+xml"

        // Previously, I've showed alert with error and aborted the script if following conditions were not met
        // But it seems to cause false negatives, so showing just a warning instead and continuing https://www.bike-forum.cz/forum/vylepsene-mapy-cz-pro-chronicke-planovace
        if (!fileType.includes("gpx")) console.warn("[refined-mapy.cz] Dropped file seems not to be GPX file based on it's type, but rather " + fileType)
        if (!fileName.endsWith(".gpx")) console.warn("[refined-mapy.cz] Dropped file seems not to be GPX file based on it's name, as it does not end with .gpx")

        var reader = new FileReader()
        reader.onload = function (fileEvent) {
          reader.onload = null // Remove, just to be sure. It was done like this in legacy Mapy.cz logic
          try {
            const xmlDoc = window.JAK.XML.createDocument(fileEvent.target.result)
            const layer = new window.SMap.Layer.GPX(xmlDoc, null, { maxPoints: 100000 }) // Legacy Mapy.cz logic has upper limit set to 1000, but let's be brave and pump it up higher based on comment from JanGPX on bike-forum.cz
            if (!layer) return alert("Invalid gpx file, parsing with Mapy.cz's GPX parser failed")
            const mapRef = window.Mapy.getComponent("pois")._map // There's definitely a better way to do this
            mapRef.addLayer(layer)
            layer.enable()
            layer.fit()
          } catch (e) {
            console.log(`[refined-mapy.cz] Error parsing gpx file: ${e}`)
            alert("Error parsing gpx file, see console for details")
          }
        }
        reader.readAsText(file)
    }
  }
} catch (e) {
  console.warn(`[refined-mapy.cz] Failed module: gpx-drop: ${e}`)
}
