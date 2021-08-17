import express from 'express';
const router = express.Router();

import controller from '../controllers/PostController';

router.get('/', controller.getPosts);
router.get('/:id', controller.getPost);
router.put('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);
router.post('/', controller.addPost);

export = router;