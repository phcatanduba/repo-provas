import express from 'express';
import cors from 'cors';
import connectDatabase from './database';
import 'reflect-metadata';
import * as examsControllers from '../controllers/examsControllers';
import * as teachersControllers from '../controllers/teachersControllers';
import * as subjectsControllers from '../controllers/subjectsControllers';

const app = express();
app.use(cors());
app.use(express.json());

export async function init() {
    await connectDatabase();
}

app.post('/exams', examsControllers.upload);

app.get('/subjects', subjectsControllers.getAll);

app.get('/teachers', teachersControllers.getAll);

app.get('/exams/teachers', examsControllers.getByTeacher);

app.get('/exams/subjects', examsControllers.getBySubject);

export default app;
