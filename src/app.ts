import express from 'express';
import cors from 'cors';
import connectDatabase from './database';
import 'reflect-metadata';
import * as examsControllers from '../src/controllers/examsControllers';

const app = express();
app.use(cors());
app.use(express.json());

export async function init() {
    await connectDatabase();
}

app.post('/exams', examsControllers.upload);

export default app;
