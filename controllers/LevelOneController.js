const model = require("../models/LevelOneModel")


const levelOneController = (req, res) => {

    const response = model.levelOneModel(req)
    
    if(!response){
        return res.status(404).send({ "error" : "Missing data" })
    }
    
    return res.status(200).send(response)
}


module.exports = {
    levelOneController
}
