import express from 'express';
import { googleApi } from '../config/keys';

const google = express.Router();

google.get('/', (req, res) => {
  res.send(googleApi);
});

export default google;
