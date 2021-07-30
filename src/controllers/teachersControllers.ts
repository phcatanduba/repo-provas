import { Request, Response } from 'express';
import * as teachersServices from '../services/teachersServices';

export async function getAll(req: Request, res: Response) {
    try {
        const result = await teachersServices.getAll();
        res.send(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}
