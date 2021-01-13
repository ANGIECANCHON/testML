const coordinates = require('../utils/coordinates.js')
const message = require('../utils/messaje.js')

const levelOneModel = ({ body }) => {

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


    let mss = message.messageProcess(mssKenobi, mssSky, mssSato)

    if (!distanceAP || !distanceBP || !distanceCP || mss == "") {
        return null
    } else {
        result = coordinates.coordinates(Ax, Ay, Bx, By, Cx, Cy, distanceAP, distanceCP)
        mss = mss.toString()
        mss = mss.replaceAll(",", "\ ");

        return { "CoordenadaPx": result.Px, "CoordenadaPy": result.Py, "message": mss }
    }
}

module.exports = {
    levelOneModel
}
