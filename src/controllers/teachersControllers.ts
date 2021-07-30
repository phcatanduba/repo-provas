import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

export async function get(req: Request, res: Response) {
    try {
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}
