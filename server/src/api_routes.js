import express from 'express';

import users from './api/users_routes';
import places from './api/places_routes';

const apiRoutes = express.Router();

apiRoutes.use('/users', users);

export default apiRoutes;
