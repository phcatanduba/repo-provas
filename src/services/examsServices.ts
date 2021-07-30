import { getRepository } from 'typeorm';
import Exams from '../entities/Exams';

interface createExam {
    link: string;
    name: string;
    teachersId: number;
    categoriesId: number;
}

export async function insertAnExam(exam: createExam) {
    await getRepository(Exams).insert(exam);
}

export async function checkIfLinkAlreadyExists(link: string) {
    await getRepository(Exams).find({ link });
}
