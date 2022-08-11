var express = require("express");
var bodyParser = require("body-parser");

// create application/json parser
var jsonParser = bodyParser.json();

const cors = require("cors");

const capitanes = [
  { nombre: "David", color: "" },
  { nombre: "Yosu", color: "" },
];

const jugadores = [
  { nombre: "Urko", color: "" },
  { nombre: "Maestre", color: "" },
  { nombre: "Sanjo", color: "" },
  { nombre: "Edu", color: "" },
  { nombre: "Yaiza", color: "" },
  { nombre: "Manex", color: "" },
  { nombre: "Gorka", color: "" },
  { nombre: "Cynda", color: "" },
  { nombre: "Larra", color: "" },
  { nombre: "Nahia", color: "" },
  { nombre: "Borja", color: "" },
  { nombre: "Ander", color: "" },
  { nombre: "Kulentxo", color: "" },
  { nombre: "Jenni", color: "" },
];

var app = express();
app.use(cors());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/jugadores", (req, res, next) => {
  res.json(jugadores);
});

app.get("/reiniciar", (req, res, next) => {
  jugadores.forEach((element) => {
    element.color = "";
  });
  res.json("OK");
});

app.post("/cambiar", jsonParser, (req, res, next) => {
  console.log(req.body);
  let nombre = req.body.nombre;
  let color = req.body.color;
  let indice = buscar(nombre);
  jugadores[indice].color = color;
  res.json(jugadores);
});

function buscar(nombre) {
  return jugadores.findIndex((o) => o.nombre === nombre);
}
