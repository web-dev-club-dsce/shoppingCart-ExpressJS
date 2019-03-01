const express = require('express')
const app = express()

// common middleware code for all
app.use('/', (req, res, next) => {
  console.log("common code")
  next()
})

// middle ware 2
app.use('/product', (req, res, next) => {
  console.log("2nd middleware")
})

// middleware
app.use('/', (req, res, next) => {
  console.log("i'm in middleware 1")
  res.send('<h1>Yo YO</h1><p>WEB DEV CLUB</p>')
})

app.listen(3000)
