const express = require('express')
const path = require('path')

const fruitRoutes = require('./routes/animals')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/animals', fruitRoutes)

module.exports = server
