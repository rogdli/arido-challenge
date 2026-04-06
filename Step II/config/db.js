const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    //Eso es como decirle al pool: “cuando tengas que conectarte, 
    // usá ESTE usuario, ESTA contraseña, ESTE host…”
    // El pool después crea y reutiliza conexiones automáticamente.
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

module.exports = pool;