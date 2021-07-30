import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Subject from '../entities/Subjects';

export async function get(req: Request, res: Response) {
    try {
        const result = await getRepository(Subject).find();
        res.send(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}
