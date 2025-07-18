import { pool } from "../config/db.js"; // Importa el pool de conexiones
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req , res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res,status(400).json({ message:'El email y la contraseña son obligatorios' });
    }

    try {

        const [rows] = await pool.query('SELECT * FROM clientes WHERE email = ?', [email]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const user = rows[0];

    const ispasswordcorrect = await bcrypt.compare(password, user.password);
    if (!ispasswordcorrect) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token =jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.status(200).json({ 
        message: 'login exitoso'});
    }catch (error) {
            res.status(500).json({ message: 'Error al iniciar sesión' });
        
    }

};
