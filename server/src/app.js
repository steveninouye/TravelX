import '@babel/polyfill';
import express from 'express';
import passport from 'passport';
import bp from 'body-parser';
import mongoose from 'mongoose';
import { resolve } from 'path';

import { dbUri } from './config/keys';
import passportConfig from './config/passport';
import apiRoutes from './api_routes';

const app = express();
const clientPath = resolve(__dirname, '../../client/dist');

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(passport.initialize());
passportConfig(passport);

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(clientPath));
   app.get('/', (req, res) => {
      res.sendFile(resolve(clientPath, 'index.html'));
   });
}

app.use('/api', apiRoutes);

mongoose
   .connect(
      dbUri,
      { useNewUrlParser: true }
   )
   .then(() => console.log('Connected to Mongo DB'))
   .catch((err) => console.log(`DB Error: ${err}`));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
