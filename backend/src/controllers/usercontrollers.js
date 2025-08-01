import { pool } from '../config/db.js'; // Importa el pool de conexiones

export const getAllUsers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};