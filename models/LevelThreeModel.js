const coordinates = require('../utils/coordinates.js')
const message = require('../utils/messaje.js')
const fs = require('fs');
const ruteJson = "./data/data.json"

const levelThreeModel = ({ params, body }) => {
    let json
    let obj

    body.name = params.satelliteName
    const data = fs.readFileSync(ruteJson, 'utf8')

    if (data) {
        json = JSON.parse(data);
        let index = json.satellites.findIndex(i => i.name === body.name)
        if (index != -1) {
            json.satellites[index] = body
            obj = json
        } else {
            json.satellites.push(body)
            obj = json
        }
    } else {
        obj = {
            satellites: []
        }
        obj.satellites.push(body)
    }

    json = JSON.stringify(obj);
    fs.writeFile(ruteJson, json, (err) => {
        return err
    })
    return true
}

const getPosition = () => {
    let json
    try {
        const data = fs.readFileSync(ruteJson, 'utf8')
        json = JSON.parse(data);

        return { "body": json }
    } catch (err) {
        return err
    }
}

module.exports = {
    levelThreeModel,
    getPosition
}