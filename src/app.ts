import express from 'express';
import cors from 'cors';
import connectDatabase from './database';
import 'reflect-metadata';
import * as examsControllers from '../src/controllers/examsControllers';
import * as teachersControllers from '../src/controllers/teachersControllers';

const app = express();
app.use(cors());
app.use(express.json());

export async function init() {
    await connectDatabase();
}

app.post('/exams', examsControllers.upload);

app.get('/subjects', teachersControllers.get);

app.get('/teachers', teachersControllers.get);

export default app;
