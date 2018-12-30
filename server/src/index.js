import '@babel/polyfill';
import { join } from 'path';
import express from 'express';

import routes from './api';

const app = express();
app.use('/api', routes);

app.get('/', (req, res) => {
   res.json('this working');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
