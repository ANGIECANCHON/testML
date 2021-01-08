const coordinates = (Ax, Ay, Bx, By, Cx, Cy, distanceAP, distanceCP)=>{
    const grNine = 90

    const angleA = Math.atan((Bx-Ax)/(By-Ay))
    const angleC = Math.atan((Bx-Cx)/(By-Cy))

    const ZAB = grNine + Math.atan((Ay-By)/(Ax-Bx))
    const ZCB = grNine + Math.atan((Cy-By)/(Cx-Bx))

    const ZAP = angleA - ZAB
    const ZCP = angleC - ZCB

    const Py = Ay + (distanceAP * Math.cos(ZAP))
    const Px = Ax + (distanceAP * Math.sin(ZAP))

    const Py2 = Ay + (distanceCP * Math.cos(ZCP))
    const Px2 = Ax + (distanceCP * Math.sin(ZCP))

    return { "Py": Py.toFixed(2), "Px": Px.toFixed(2) }

}

module.exports = {
    coordinates
}