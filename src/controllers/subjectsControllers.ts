import { Request, Response } from 'express';
import * as subjectsServices from '../services/subjectsServices';

export async function getAll(req: Request, res: Response) {
    try {
        const result = await subjectsServices.getAll();
        res.send(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}
