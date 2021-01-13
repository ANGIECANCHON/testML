const coordinates = require('../utils/coordinates')
const message = require('../utils/messaje')

const levelTwo = ({ body }) => {
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
    let result
    let mss

    const array = body.satellites

    array.map(obj => {
        switch (obj.name) {
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

    if(!mssSato || !mssKenobi || !mssSky || !distanceAP || !distanceBP || !distanceCP){

        return false
    } else {
        mss = message.messageProcess(mssKenobi, mssSky, mssSato)

        result = coordinates.coordinates(Ax, Ay, Bx, By, Cx, Cy, distanceAP, distanceCP)
        mss = mss.toString()
        mss = mss.replaceAll(",", "\ ");

        return { "Position": { "x": result.Px, "y": result.Py }, "message": mss }
    }
}

module.exports = {
    levelTwo
}