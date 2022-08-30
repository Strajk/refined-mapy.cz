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
        if (!file.type.includes("gpx")) return alert("Only single gpx file is supported for now")

        var reader = new FileReader()
        reader.onload = function (fileEvent) {
          reader.onload = null // Remove, just to be sure. It was done like this in legacy Mapy.cz logic
          try {
            const xmlDoc = window.JAK.XML.createDocument(fileEvent.target.result)
            const layer = new window.SMap.Layer.GPX(xmlDoc, null, { maxPoints: 1000 }) // Taken from legacy Mapy.cz logic
            if (!layer) return alert("Invalid gpx file")
            const mapRef = window.Mapy.getComponent("pois")._map // There's definitely a better way to do this
            mapRef.addLayer(layer)
            layer.enable()
            layer.fit()
          } catch (e) {
            console.log(`Error parsing gpx file: ${e}`)
          }
        }
        reader.readAsText(file)
    }
  }
} catch (e) {
  console.warn(`[refined-mapy.cz] Failed module: gpx-drop: ${e}`)
}
