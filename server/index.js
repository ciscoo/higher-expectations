const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { apiRoutes } = require('./routes')
const errorHandlers = require('./middleware/error-handlers')

const app = express()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', apiRoutes)

app.use(errorHandlers.invalidRoute)
app.use(errorHandlers.validationErrors)
app.use(errorHandlers.production)

module.exports = app
