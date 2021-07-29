import { Request, Response } from 'express';
import Exams from '../entities/Exams';

export async function upload(req: Request, res: Response) {
    const { link, teachers, categories } = req.body as Exams;
    if (!link || !teachers) {
        res.sendStatus(400);
    } else {
        res.send({ link, teachers });
    }
}
