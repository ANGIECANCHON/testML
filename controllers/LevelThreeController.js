const model = require("../models/LevelThreeModel")
const modelTwo = require("../models/LevelTwoModel")


const levelThreeController = (req, res) => {
    const response = model.levelThreeModel(req)
    
    if(!response){
        return res.status(400).send({ "error" : "the data could not be saved" })
    }
    
    return res.status(200).send({ "message" : "data saved successfully" })
}

const getPosition = (req, res) =>{
    const dataJson = model.getPosition()
    const response = modelTwo.levelTwo(dataJson)

    if(!response){
        return res.status(400).send({ "message" : "Missing data" })
    }
    
    return res.status(200).send(response)

}


module.exports = {
    levelThreeController,
    getPosition
}
