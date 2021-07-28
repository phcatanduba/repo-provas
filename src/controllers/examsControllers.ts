import { Request, Response } from 'express';
import Exams from '../entities/Exams';

export async function upload(req: Request, res: Response) {
    const { link, subject } = req.body as Exams;
    if (!link || !subject) {
        res.sendStatus(400);
    } else {
        res.send({ link, subject });
    }
}
