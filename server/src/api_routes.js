import express from 'express';

import users from './api/users_routes';
import places from './api/places_routes';
import itineraries from './api/itineraries_routes';
import google from './api/google_routes';

const apiRoutes = express.Router();

apiRoutes.use('/users', users);
apiRoutes.use('/places', places);
apiRoutes.use('/google', google);
apiRoutes.use('/itineraries', itineraries);

export default apiRoutes;
