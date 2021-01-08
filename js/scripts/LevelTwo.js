const coordinates = require('./coordinates.js')
const message = require('./messaje.js')

const levelTwo = ({ body }, res) => {
    const Ax = -500
    const Ay = -200
    const Bx = 100
    const By = -100
    const Cx = 500
    const Cy = 100

    let distanceAP
    let mssKenobi
    let distanceBP
    let mssSky
    let distanceCP
    let mssSato

    const array = body.satellites

    array.map(obj => {
        switch(obj.name){
            case "kenobi":
                distanceAP = obj.distance
                mssKenobi = obj.message
                
            break;
            case "skywalker":
                distanceBP = obj.distance
                mssSky = obj.message
                
            break;
            case "sato":
                distanceCP = obj.distance
                mssSato = obj.message
                
            break;
        }
    })

    result = coordinates.coordinates(Ax, Ay, Bx, By, Cx, Cy, distanceAP, distanceCP)
    let mss = message.messageProcess(mssKenobi, mssSky, mssSato)

    if(!result || !mss || mss == ""){
        return res.status(400).send({ "message" : "Not found" })
    }
    mss = mss.toString()
    mss = mss.replaceAll(",", "\ ");
    
    return res.status(200).send({ "Position": {"x": result.Px, "y": result.Py} , "message": mss})

}

module.exports = {
    levelTwo
}