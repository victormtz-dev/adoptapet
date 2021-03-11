/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Mascotas
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de usuarios
const Mascota = require('../models/mascota')

function crearMascota(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtenerMascotas(req, res) {
  // Simulando dos usuarios y respondiendolos
  var mascota1 = new Mascota(1, 'Toby', 'Perro', 'adopcion')
  var mascota2 = new Mascota(2, 'Milla', 'Gato', 'adopcion')
  res.send([mascota1, mascota2])
}

function modificarMascota(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  var mascota1 = new Mascota(1, 'Toby', 'Perro', 'adopcion')
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}

function eliminarMascota(req, res) {
  // se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`Mascota ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
}