import React, { Component } from 'react';
//import logo from './logo.svg';
import map from './map.jpg'
import './App.css';

const request = require("request")

function estacionesSalidaJSON() {
  return [
    {
      "key": 1,
      "value": "Hualqui"
    },
    {
      "key": 2,
      "value": "La Leonera"
    },
    {
      "key": 3,
      "value": "Manquimavida"
    },
    {
      "key": 4,
      "value": "Pedro Medina"
    },
    {
      "key": 6,
      "value": "Chiguayante"
    },
    {
      "key": 7,
      "value": "Concepción"
    },
    {
      "key": 8,
      "value": "Lzo. Arenas"
    },
    {
      "key": 9,
      "value": "UTFSM"
    },
    {
      "key": 10,
      "value": "Los Condores"
    },
    {
      "key": 11,
      "value": "Higueras"
    },
    {
      "key": 12,
      "value": "El Arenal"
    },
    {
      "key": 13,
      "value": "Mercado Thno."
    },
    {
      "key": 14,
      "value": "Juan Pablo II"
    },
    {
      "key": 15,
      "value": "Diagonal Biobio"
    },
    {
      "key": 16,
      "value": "Alborada"
    },
    {
      "key": 17,
      "value": "Costa Mar"
    },
    {
      "key": 46,
      "value": "El Parque"
    },
    {
      "key": 18,
      "value": "Lomas Coloradas"
    },
    {
      "key": 39,
      "value": "Cardenal Raúl Silva H."
    },
    {
      "key": 40,
      "value": "Hito Galvarino"
    },
    {
      "key": 41,
      "value": "Los Canelos"
    },
    {
      "key": 42,
      "value": "Huinca"
    },
    {
      "key": 43,
      "value": "Cristo Redentor"
    },
    {
      "key": 44,
      "value": "Laguna Quiñenco"
    },
    {
      "key": 45,
      "value": "Intermodal Coronel"
    },
    {
      "key": 49,
      "value": "Integración Lota"
    }
  ]
}

function estacionesLlegada(estacion) {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      url: 'http://www.fesur.cl/gestion/site/optionsEstacion',
      qs: { id: estacion, ns: "BIOTREN" },
      headers:
        {
          'Postman-Token': 'b26cc68d-beb1-47a5-9410-9c745fd79517',
          'Cache-Control': 'no-cache',
          "Access-Control-Allow-Origin": "*",
          //"Access-Control-Allow-Origin": "X-Requested-With"
        }
    }

    request(options, function (error, response, body) {
      if (error) reject(error)

      resolve(body)
    })
  })
}

class App extends Component {
  estacionesSalida() {
    return estacionesSalidaJSON().map(estacion => { return <button>{estacion.value}</button> })
  }

  selectEstacion(e) {
    e.preventDefault()
    estacionesSalidaJSON().forEach(estacion => {
      if (estacion.value === e.target.title) {
        estacionesLlegada(estacion.key).then(result => {
          result.split("</option>").forEach(option => {
            option = option.trim()
            option = option.replace('<option value="', '')
            option = option.replace('">', '|')
            option = option.replace('-- Seleccione la Estación --', '')
            if (option !== '|') {
              option = option.split("|")
              if (option.length > 1) console.log(option)
            }
          })
        }).catch(error => {
          console.error(error)
        })
      }
    })
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <p className="App-intro">
          <map name="biotren_map">
            <area target="" alt="Intermodal Coronel" title="Intermodal Coronel" coords="649,2389,42" href="#" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="Laguna Quiñenco" title="Laguna Quiñenco" href="" coords="560,2326,47" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="Cristo Redentor" title="Cristo Redentor" href="" coords="504,2245,44" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="Huinca" title="Huinca" href="" coords="454,2151,45" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="Los Canelos" title="Los Canelos" href="" coords="482,1994,44" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="Hito Galvarino" title="Hito Galvarino" href="" coords="494,1886,45" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="Cardenal Raúl Silva H." title="Cardenal Raúl Silva H." href="" coords="524,1764,43" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="Lomas Coloradas" title="Lomas Coloradas" href="" coords="561,1664,45" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="El Parque" title="El Parque" href="" coords="562,1546,45" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="Costa Mar" title="Costa Mar" href="" coords="575,1429,46" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="Alborada" title="Alborada" href="" coords="592,1265,45" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="Diagonal Biobio" title="Diagonal Biobio" href="" coords="631,1139,44" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="Juan Pablo II" title="Juan Pablo II" href="" coords="751,1036,44" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
            <area target="" alt="Concepción" title="Concepción" href="" coords="1018,973,60" shape="circle" onClick={(e) => { this.selectEstacion(e) }} />
          </map>
          <img src={map} useMap="#biotren_map" alt="" />
        </p>
      </div>
    );
  }
}

export default App;
