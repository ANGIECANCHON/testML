const coordinates = require('./coordinates.js')
const message = require('./messaje.js')


const levelOne = ({ body }, res) => {

    const Ax = -500
    const Ay = -200
    const Bx = 100
    const By = -100
    const Cx = 500
    const Cy = 100

    const distanceAP = body.DistanceAP
    const distanceBP = body.DistanceBP
    const distanceCP = body.DistanceCP
    const mssKenobi = body.Kenobi
    const mssSky = body.Skywalker
    const mssSato = body.Sato
    
    result = coordinates.coordinates(Ax, Ay, Bx, By, Cx, Cy, distanceAP, distanceCP)
    let mss = message.messageProcess(mssKenobi, mssSky, mssSato)
    mss = mss.toString()
    mss = mss.replaceAll(",", "\ ");
    
    return res.status(200).send({ "CoordenadaPx": result.Px, "CoordenadaPy": result.Py, "message": mss})
}


module.exports = {
    levelOne
}