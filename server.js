// Import express package
const express = require('express')

// Instantiate an express object
const app = express()
const port = 3000

// All static files will be coming from the public folder
app.use(express.static('public'))

// Routing files
var ocr = require('./controllers/ocr')
var ldp = require('./controllers/ldp')

// When we first load the server it will send index.html
app.get('/', function(req, res){
    res.sendFile("index.html", {root: '.'})
})

// localhost:3000/ocr or /ldp implementation
app.use('/ocr', ocr)
app.use('/ldp', ldp)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
