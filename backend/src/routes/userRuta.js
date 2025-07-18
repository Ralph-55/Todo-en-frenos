import { Router } from 'express';

import { getAllUsers } from '../controllers/usercontrollers.js';

const router = Router();
// Cuando alguien haga una petición GET a esta ruta, se ejecuta getAllUsers
router.get('/', getAllUsers);

export default router;