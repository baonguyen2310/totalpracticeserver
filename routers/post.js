import express from 'express';
import { getPost, commentPost } from '../controllers/post.js';


const router = express.Router();

router.get('/', getPost);
router.post('/', (req, res) => {
    const userName = req.body.userName;
    const comment = req.body.comment;
    const id = req.body.id;
    res.json(comment);
    commentPost(id, userName, comment);
});

export default router;