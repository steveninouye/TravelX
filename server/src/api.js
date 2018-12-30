import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
   res.json('this is user route');
});

export default router;
