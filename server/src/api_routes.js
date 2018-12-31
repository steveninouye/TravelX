import express from 'express';

import userRoutes from './api/user_routes';

const apiRoutes = express.Router();

apiRoutes.use('/users', userRoutes);

export default apiRoutes;
