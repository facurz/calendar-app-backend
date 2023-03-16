/*
Rutas de Usuarios / Auth
host + /api/auth
*/ 

const express = require('express');
const { dbConnection } = require('./database/config.js');
require('dotenv').config();
const cors = require('cors');

// Crear servidor de Express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

// Escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto 4000')
})