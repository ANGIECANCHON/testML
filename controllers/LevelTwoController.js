const model = require("../models/LevelTwoModel")

const levelTwo = (req, res) => {

    const response = model.levelTwo(req)

    if(!response){
        return res.status(404).send({ "error" : "Missing data" })
    }
    
    return res.status(200).send(response)

}

module.exports = {
    levelTwo
}
