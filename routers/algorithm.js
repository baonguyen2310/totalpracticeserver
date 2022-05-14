import express from 'express';
import { 
    Excercise1, 
    Excercise2, 
    Excercise3, 
    Excercise4, 
    Excercise5, 
    Excercise6, 
    Excercise7,
    Excercise8,
    Excercise9} from '../controllers/algorithm/index.js';

const router = express.Router();

router.post('/1', (req, res) => {
    const student = req.body.name;
    res.json(`${student} đã ghi danh`);

});

router.get('/1', Excercise1);
router.get('/2', Excercise2);
router.get('/3', Excercise3);
router.get('/4', Excercise4);
router.get('/5', Excercise5);
router.get('/6', Excercise6);
router.get('/7', Excercise7);
router.get('/8', Excercise8);
router.get('/9', Excercise9);

export default router;