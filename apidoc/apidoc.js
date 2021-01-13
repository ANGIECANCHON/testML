/**
 * @api {post} testml-301116.uc.r.appspot.com/topsecret top secret
 * @apiGroup Operación Fuego de Quasar
 * @apiName Nivel dos
 *
 * @apiParam {String} name nombre del satelite
 * @apiParam {int} distance distancia entre el satelite y la nave
 * @apiParam {Array} message contenido del mensaje de auxilio
 * 
 * @apiParamExample {json} Request-Example:
*    {
*    "satellites": [
*        {
*            "name": "kenobi",
*            "distance": 100.0,
*            "message": ["este", "", "", "mensaje", ""]
*        },
*        {
*            "name": "skywalker",
*            "distance": 115.5,
*            "message": ["", "es", "","", "secreto"
*            ]
*        },
*        {
*            "name": "sato",
*            "distance": 142.7, 
*            "message": ["este", "", "un", "", ""]
*        }
*    ]
*}
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *    {
 *    "Position": {
 *        "x": "-571.38",
 *        "y": "-129.96"
 *    },
 *    "message": "este es un mensaje secreto"
*} 
* @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *   "error": "Missing data"
*}
 */
/**
 * @api {post} testml-301116.uc.r.appspot.com/ml/levelOne nivel uno
 * @apiGroup Operación Fuego de Quasar
 * @apiName Nivel uno
 *
 * @apiParam {long} DistanceAP Distancia entre satelite Kenobi(A) y la nave
 * @apiParam {long} DistanceBP Distancia entre satelite skywalker(B) y la nave
 * @apiParam {long} DistanceCP Distancia entre satelite sato(C) y la nave
 * @apiParam {String} Kenobi mensaje de auxilio kenobi
 * @apiParam {String} Skywalker mensaje de auxilio Skywalker
 * @apiParam {String} Sato mensaje de auxilio Sato
 * 
 * @apiParamExample {json} Request-Example:
*{
 *   "DistanceAP":100.0,
 *   "DistanceBP":115.2,
 *   "DistanceCP":142.4,
 *   "Kenobi":["", "este", "es", "un", "mensaje"],
 *   "Skywalker":["este", "", "un", "mensaje"],
 *  "Sato":["", "", "es", "", "mensaje"]
*}
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *   "CoordenadaPx": "-571.38",
 *   "CoordenadaPy": "-129.96",
 *   "message": "este es un mensaje"
*}
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *   "error": "Missing data"
*}
 */
/**
 * @api {post} testml-301116.uc.r.appspot.com/topsecret_split/{satellite_name} guarda info satelites
 * @apiGroup Operación Fuego de Quasar
 * @apiName Nivel tres
 *
 * @apiParam {long} distance Distancia entre satelite {satellite_name} y la nave
 * @apiParam {Array} message mensaje de auxilio satelite {satellite_name} 
 * 
 * @apiParamExample {json} Request-Example:
*{
 *   "distance": 142.7,
 *   "message": ["este", "", "un", "", "" ]
*}
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
*{
*    "message": "data saved successfully"
*}
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *   "error": "the data could not be saved"
*}
 */
/**
 * @api {get} testml-301116.uc.r.appspot.com/topsecret_split/ nivel tres trae posicion
 * @apiGroup Operación Fuego de Quasar
 * @apiName Nivel tres
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *    {
 *    "Position": {
 *        "x": "-571.38",
 *        "y": "-129.96"
 *    },
 *    "message": "este es un mensaje secreto"
*}
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *   "error": "Missing data"
*}
 */