import { Request, Response } from 'express';
import Exams from '../entities/Exams';
import joi from 'joi';
import * as examsServices from '../services/examsServices';

export async function upload(req: Request, res: Response) {
    const { link, name, teachersId, categoriesId } = req.body as Exams;

    if (!link || !teachersId || !name || !categoriesId) {
        res.sendStatus(400);
    } else {
        const examSchema = joi.object().keys({
            name: joi.string().required(),
            link: joi.string().required(),
            teachers: joi.number().required(),
            categories: joi.number().required(),
        });

        await examsServices.checkIfLinkAlreadyExists(link);

        await examsServices.insertAnExam({
            link,
            name,
            teachersId,
            categoriesId,
        });
        res.sendStatus(200);
    }
}
