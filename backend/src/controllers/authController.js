import { pool } from "../config/db.js"; // Importa el pool de conexiones
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
    // La propiedad en el body se llama "password" en el frontend, usa el mismo nombre aquí.
    const { name, email, contraseña } = req.body;

    if (!name || !email || !contraseña) {
        // CORREGIDO: res.status en lugar de res,status
        return res.status(400).json({ message: 'El nombre, email y contraseña son obligatorios' });
    }

    try {
        const [existeusuario] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (existeusuario.length > 0){
            // CORREGIDO: res.status en lugar de res.estatus
            return res.status(409).json({ message: 'El correo ya existe'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedcontraseña = await bcrypt.hash(contraseña, salt);

        const [resultado] = await pool.query('INSERT INTO usuarios (name, email, contraseña) VALUES (?, ?, ?)',
            [name, email, hashedcontraseña]
        );

        console.log(`✅ Usuario creado exitosamente con ID: ${resultado.insertId}`);

        res.status(201).json({ 
            message: 'Usuario registrado exitosamente',
            userId: resultado.insertId 
            
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
};

export const login = async (req, res) => {
  // Estandarizamos a "password" para consistencia
  const { email, contraseña } = req.body;

  if (!email || !contraseña) {
    // CORREGIDO: "res.status" en lugar de "res,status"
    return res.status(400).json({ message: 'El email y la contraseña son obligatorios' });
  }

  try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);

    // MEJORA DE SEGURIDAD: No le digas al atacante si el usuario existe o no.
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const user = rows[0];

    // Compara la contraseña enviada con la hasheada en la BD
    const isPasswordCorrect = await bcrypt.compare(contraseña, user.contraseña);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Crea el token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'un_secreto_por_defecto', // Añadimos un secreto por defecto
      { expiresIn: '1h' }
    );

    // ✅ CORREGIDO: Se envía el token en la respuesta de éxito
    res.status(200).json({
      message: 'Login exitoso',
      token: token
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor al iniciar sesión' });
  }
};
