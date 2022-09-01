/* eslint-disable no-proto */

try {
  const listInstance = window.Mapy
    .getComponent("mymaps")
    ._items[0] // 0: Places, 1: Activities, 2: Photos
    .component
    // ._activeComp._list // This is not set when entering Mapy.cz not on `My maps` section
    ._list // this should be set, but TBH not sure why ¯\_(ツ)_/¯

  listInstance
    .__proto__
    ._setHeights = function () {
      const folderHeight = 40 + 2 * 4 // orig: 160
      this._dom.foldersList.style.height = this._dom.foldersList.children.length * folderHeight + "px"
      const itemHeight = 85 // orig: 85
      this._dom.itemsList.style.height = this._dom.itemsList.children.length * itemHeight + "px"
    }

  listInstance
    .__proto__
    ._setHeights
    .apply(listInstance)
} catch (e) {
  console.warn(`[refined-mapy.cz] Failed module: sidebar-condensed: ${e}`)
}
