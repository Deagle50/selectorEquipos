var express = require("express");
var bodyParser = require("body-parser");

// create application/json parser
var jsonParser = bodyParser.json();

const cors = require("cors");

/**
 *
 * 
 */

const jugadores = [
  [
    { nombre: "Maestre", color: "negro" },
    { nombre: "Alexander", color: "blanco" },
  ],
  [
    { nombre: "Ivan", color: "" },
    { nombre: "Davos", color: "" },
  ],
  [
    { nombre: "Sanjo", color: "" },
    { nombre: "Totx", color: "" },
  ],
  [
    { nombre: "Manex", color: "" },
    { nombre: "Edu", color: "" },
  ],
  [
    { nombre: "Jorge", color: "" },
    { nombre: "Urko", color: "" },
  ],
  [
    { nombre: "Unai M", color: "" },
    { nombre: "Gorka", color: "" },
  ],
  [
    { nombre: "Borja", color: "" },
    { nombre: "Deivo", color: "" },
  ],
];

var app = express();
app.use(cors());

const port = 4646;

app.listen(port, () => {
  console.log("Server running on port " + port);
});

app.get("/jugadores", (req, res, next) => {
  res.json(jugadores);
});

app.get("/reiniciar", (req, res, next) => {
  jugadores.forEach((element) => {
    element[0].color = "";
    element[1].color = "";
  });
  res.json("OK");
});

app.post("/cambiar", jsonParser, (req, res, next) => {
  console.log(req.body);
  let nombre = req.body.nombre;
  let color = req.body.color;
  let indices = buscar(nombre);
  console.log("INDICES");
  console.log(indices);
  jugadores[indices[0]][indices[1]].color = color;
  console.log(jugadores);
  res.json(jugadores);
});

app.get("/sorteo", (req, res, next) => {
  res.json(sorteo());
});

function buscar(nombre) {
  for (let i = 0; i < jugadores.length; i++) {
    if (jugadores[i][0].nombre == nombre) {
      return [i, 0];
    }
    if (jugadores[i][1].nombre == nombre) {
      return [i, 1];
    }
  }
  // return jugadores.findIndex((o) => o.nombre === nombre);
}

const sorteo = () => {
  return getRandomInt(1, 2);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
