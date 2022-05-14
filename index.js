import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import post from './routers/post.js';
import algorithm from './routers/algorithm.js';

const URI = process.env.URI;

mongoose
    .connect(URI)
    .then (() => {
        console.log("connected mongoose");
    }).catch (err => {
        console.log(err);
    });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/post', post);
app.use('/algorithm', algorithm);

app.listen(PORT, () => {
    console.log("Server is running");
})