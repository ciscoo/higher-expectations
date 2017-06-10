const checkVersions = require('../build/check-versions')
const { join } = require('path')
const express = require('express')
const bodyParser = require('body-parser')

checkVersions()

const port = process.env.PORT
const app = express()

// Allows parsing the body content via `req.body`
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Be sure to run the `build` command before production.
app.use(express.static(join(__dirname, '../dist')))

// Other routes

// Redirect any invalid requests back to document root with a 404 status
app.all('*', (req, res) => { res.status(404).redirect('/') })

app.listen(port, () => {
  console.info(`🚀 Server is running at http://localhost:${port}`)
})
