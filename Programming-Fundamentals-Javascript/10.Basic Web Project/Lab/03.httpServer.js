const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/home', function (req, res) {
  res.send('Hello Home')
})

app.listen(3000, () => console.log('App started'))
