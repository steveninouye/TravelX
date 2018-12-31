import '@babel/polyfill';
import { join } from 'path';
import express from 'express';
import passport from 'passport'

import passportConfig from './config/passport'
import apiRoutes from './api_routes';

const app = express();

app.use(passport.initialize());
passportConfig(passport);

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
