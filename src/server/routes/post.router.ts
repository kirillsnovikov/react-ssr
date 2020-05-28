import * as express from 'express';
import posts from '../controllers/post.controller';

const router = express.Router();

router.get('', posts.find);
router.post('', posts.create);
router.get('/:id', posts.findById);
router.put('/:id', posts.update);
router.delete('/:id', posts.remove);

export default router;
