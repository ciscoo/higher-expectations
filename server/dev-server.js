const checkVersions = require('../build/check-versions')
const config = require('../config')
const opn = require('opn')
const path = require('path')
const express = require('express')
// const session = require('express-session')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackConfig = require('../build/webpack.dev.conf')
const webpackHotMiddleware = require('webpack-hot-middleware')
const mongoose = require('mongoose')
// const passport = require('passport')
const errorHandlers = require('./middleware/error-handlers')
const { apiRoutes } = require('./routes')
// const MongoStore = require('connect-mongo')('session')
// const bearerToken = require('./middleware/auth')

require('./config/passport')

checkVersions()

const port = process.env.PORT || config.dev.port
const app = express()
const compiler = webpack(webpackConfig)

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })

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

// app.use(passport.session())

// app.use('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'utils/index.html'))
// })

// app.use(bearerToken())

// Serve webpack bundle output
app.use(devMiddleware)

// Enable hot-reload and state-preserving.
// Compilation error display.
app.use(hotMiddleware)

// Allows parsing the body content via `req.body`
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: process.env.SESSION_SECRET,
//   store: new MongoStore({
//     url: process.env.MONGO_URI,
//     autoReconnect: true,
//     clear_interval: 3600
//   })
// }))

// app.use(passport.initialize())
// app.use(passport.session())

// app.post('/login', passport.authenticate('local', { successRedirect: '/#/Deadlines',
//   failureRedirect: '/#/tasks'})
// )

// app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }))
// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/#/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || ('/#/dashboard' + req.user.email))
// })

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

// The webpack dev server bundle is stored in memory,
// so we need to write its contents to the response body.
app.get('/', (req, res) => {
  res.write(fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')))
  res.end()
})

app.use('/api', apiRoutes)

// Catch all invalid routes
app.use(errorHandlers.invalidRoute)

// Handle mongoose errors
app.use(errorHandlers.validationErrors)

// Show full error in development
app.use(errorHandlers.development)

// We need to wait until bundle is valid in development
console.log('Waiting for webpack to finish...')
devMiddleware.waitUntilValid(startServer)

function startServer () {
  const server = app.listen(port, () => {
    // https://github.com/glenjamin/webpack-hot-middleware/issues/210
    server.keepAliveTimeout = 0
    console.log('Express server listening on port ' + port)
    opn(`http://localhost:${port}`)
  })
}
