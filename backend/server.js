// backend/server.js
import 'dotenv/config';
import express from 'express';
import { checkConnection } from './src/config/db.js';
import userRuta from './src/routes/userRuta.js'; 
import authRoutes from './src/routes/authRoutes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 

// Middleware para parsear JSON
app.use(express.json());


// Verifica la conexión a la BD al iniciar
checkConnection();

// Usa las rutas
app.use('/api/users', userRuta);

// authentication routes
app.use('/api/auth', authRoutes);




app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});