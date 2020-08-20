
var http = require('http');
var url = require('url') ;
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
})

app.listen(port, () => console.log(`App listening on port http://localhost:${port}`));

