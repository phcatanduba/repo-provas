import { Request, Response } from 'express';
import Exams from '../entities/Exams';
import * as examsServices from '../services/examsServices';

export async function upload(req: Request, res: Response) {
    const { link, name, teachersId, categoriesId } = req.body as Exams;

    if (!link || !teachersId || !name || !categoriesId) {
        res.sendStatus(400);
    } else {
        try {
            const { hasLink, hasTeachersId, hasCategoriesId } =
                await examsServices.checkExam(link, teachersId, categoriesId);

            if (hasLink) {
                res.sendStatus(409);
            } else if (!hasTeachersId || !hasCategoriesId) {
                res.sendStatus(400);
            } else {
                await examsServices.insertAnExam({
                    link,
                    name,
                    teachersId,
                    categoriesId,
                });
                res.sendStatus(200);
            }
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}

export async function getByTeacher(req: Request, res: Response) {
    try {
        const result = await examsServices.getByTeacher();
        res.send(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getBySubject(req: Request, res: Response) {
    try {
        const result = await examsServices.getBySubject();
        res.send(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}
