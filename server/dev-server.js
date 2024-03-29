const checkVersions = require('../build/check-versions')
const config = require('../config')
const opn = require('opn')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackConfig = require('../build/webpack.dev.conf')
const webpackHotMiddleware = require('webpack-hot-middleware')
const connectHistory = require('connect-history-api-fallback')

checkVersions()

const port = process.env.PORT || config.dev.port
const app = express()
const compiler = webpack(webpackConfig)

// Configure webpack dev server and hot reload.
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})
const hotMiddleware = webpackHotMiddleware(compiler)
const { fileSystem } = devMiddleware

// Force page reload when html-webpack-plugin template changes.
compiler.plugin('compilation', (compilation) => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// Handle fallback for HTML5 history API
app.use(connectHistory())

// Serve webpack bundle output
app.use(devMiddleware)

// Enable hot-reload and state-preserving.
// Compilation error display.
app.use(hotMiddleware)

// Allows parsing the body content via `req.body`
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

// The webpack dev server bundle is stored in memory,
// so we need to write its contents to the response body.
app.get('/', (req, res) => {
  res.write(fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')))
  res.end()
})

// Redirect any invalid requests back to document root with a 404 status
app.all('*', (req, res) => { res.status(404).redirect('/') })

// We need to wait until bundle is valid in development
console.log('Waiting for webpack to finish...')
devMiddleware.waitUntilValid(startServer)

function startServer () {
  const server = app.listen(port, () => {
    // https://github.com/glenjamin/webpack-hot-middleware/issues/210
    server.keepAliveTimeout = 0
    opn(`http://localhost:${port}`)
  })
}
