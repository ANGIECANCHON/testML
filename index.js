
const levelOne = require('./controllers/LevelOneController')
const levelTwo = require('./controllers/LevelTwoController')
const levelThree = require("./controllers/LevelThreeController")
const express = require('express')
const app = express();
var port = 8080

app.use(express.json())
app.post('/ml/levelOne', levelOne.levelOneController)
app.post('/topsecret', levelTwo.levelTwo)
app.post('/topsecret_split/:satelliteName', levelThree.levelThreeController)
app.get('/topsecret_split/', levelThree.getPosition)

app.listen(port, function () {
    console.log("CONECTADO AL PUERTO" + port)
});
