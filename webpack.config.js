const path = require("path")
const exec = require("child_process").exec
const CopyWebpackPlugin = require("copy-webpack-plugin")
const stylus = require("stylus")

const pkg = require("./package.json")

function transformManifest (buffer, mode) {
  const manifest = JSON.parse(buffer.toString())
  manifest.version = pkg.version
  if (mode === "development") {
    // For easier development
    manifest.permissions.push("tabs")
    manifest.permissions.push(`http://localhost/reloadExtension?id=${pkg.name}`)
  }
  return JSON.stringify(manifest, null, 2)
}

module.exports = (env, argv) => ({
  optimization: {
    minimize: false,
  },
  entry: {
    background: "./src/background",
    content: "./src/content",
    injected: "./src/injected",
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: "src",
        from: "**",
        ignore: [
          "*.js", // Handled by Webpack core
          "*.styl", // Handled separately
          "manifest.json", // Handled separately
        ],
      },
      { context: "src", from: "manifest.json", transform: buffer => transformManifest(buffer, argv.mode) },
      { context: "src", from: "*.styl", to: "[name].css", transform: buffer => stylus.render(buffer.toString()) },
    ]),
    new ReloadPlugin(),
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
  },
})

class ReloadPlugin {
  apply (compiler) {
    compiler.hooks.afterEmit.tap("ReloadPlugin", function (compilation) {
      const BROWSER = "/System/Volumes/Data/Applications/Google Chrome Canary.app" // uncomment for default browser
      const URL = `http://localhost/reloadExtension?id=${pkg.name}`
      if (BROWSER) {
        exec(`open -a "${BROWSER}" ${URL}`)
      } else {
        exec(`open ${URL}`)
      }
    })
  }
}
