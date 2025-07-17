import mysql from 'mysql2/promise';
import 'dotenv/config'; 



const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT ,
 // Optional: Set a queue limit for the poo
});

async function checkConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Database connection successful');
    connection.release(); // Release the connection back to the pool
  } catch (error) {
    console.error('Database connection failed:', error);
  } 
}

export {pool, checkConnection};