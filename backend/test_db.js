// backend/test_db.js
import mysql from 'mysql2/promise';
import 'dotenv/config';

console.log('--- Iniciando prueba de conexión a la BD ---');

// Imprimimos las variables para asegurarnos que se están leyendo del .env
console.log('Usando las siguientes credenciales:');
console.log({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

async function testConnection() {
  let connection;
  try {
    // Intentamos crear una conexión directa
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT,
    });

    console.log('✅ ¡CONEXIÓN EXITOSA!');
  } catch (error) {
    // Si hay un error, aquí lo veremos en detalle
    console.error('❌ ERROR AL CONECTAR:');
    console.error(error);
  } finally {
    if (connection) {
      await connection.end();
      console.log('--- Conexión cerrada. Prueba finalizada. ---');
    }
  }
}

testConnection();