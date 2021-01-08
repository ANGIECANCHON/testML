
const levelOne = require('./js/scripts/LevelOne')
const levelTwo = require('./js/scripts/LevelTwo')
const express = require('express')
const app = express();
var port = 8080

app.use(express.json())
app.post('/ml/levelOne', levelOne.levelOne)
app.post('/topsecret', levelTwo.levelTwo)

app.listen(port, function () {
    console.log("CONECTADO AL PUERTO" + port)
});