import express from 'express';
const router = express.Router();

router.use('/posts', require('./posts'));

export = router;