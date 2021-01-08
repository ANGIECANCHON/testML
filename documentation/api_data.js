define({ "api": [
  {
    "type": "post",
    "url": "/topsecret",
    "title": "top secret",
    "group": "Operación_Fuego_de_Quasar",
    "name": "Nivel_dos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>nombre del satelite</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "distance",
            "description": "<p>distancia entre el satelite y la nave</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>contenido del mensaje de auxilio</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "   {\n   \"satellites\": [\n       {\n           \"name\": \"kenobi\",\n           \"distance\": 100.0,\n           \"message\": [\"este\", \"\", \"\", \"mensaje\", \"\"]\n       },\n       {\n           \"name\": \"skywalker\",\n           \"distance\": 115.5,\n           \"message\": [\"\", \"es\", \"\",\"\", \"secreto\"\n           ]\n       },\n       {\n           \"name\": \"sato\",\n           \"distance\": 142.7, \n           \"message\": [\"este\", \"\", \"un\", \"\", \"\"]\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n   \"Position\": {\n       \"x\": \"-571.38\",\n       \"y\": \"-129.96\"\n   },\n   \"message\": \"este es un mensaje secreto\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js/apidoc.js",
    "groupTitle": "Operación_Fuego_de_Quasar"
  },
  {
    "type": "post",
    "url": "/ml/levelOne",
    "title": "nivel uno",
    "group": "Operación_Fuego_de_Quasar",
    "name": "Nivel_uno",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "DistanceAP",
            "description": "<p>Distancia entre satelite Kenobi(A) y la nave</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "DistanceBP",
            "description": "<p>Distancia entre satelite skywalker(B) y la nave</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "DistanceCP",
            "description": "<p>Distancia entre satelite sato(C) y la nave</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Kenobi",
            "description": "<p>mensaje de auxilio kenobi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Skywalker",
            "description": "<p>mensaje de auxilio Skywalker</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Sato",
            "description": "<p>mensaje de auxilio Sato</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"DistanceAP\":100.0,\n  \"DistanceBP\":115.2,\n  \"DistanceCP\":142.4,\n  \"Kenobi\":[\"\", \"este\", \"es\", \"un\", \"mensaje\"],\n  \"Skywalker\":[\"este\", \"\", \"un\", \"mensaje\"],\n \"Sato\":[\"\", \"\", \"es\", \"\", \"mensaje\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"CoordenadaPx\": \"-571.38\",\n  \"CoordenadaPy\": \"-129.96\",\n  \"message\": \"este es un mensaje\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "js/apidoc.js",
    "groupTitle": "Operación_Fuego_de_Quasar"
  }
] });
