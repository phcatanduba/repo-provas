import { getRepository } from 'typeorm';
import Exams from '../entities/Exams';
import * as teachersServices from '../services/teachersServices';
import * as categoriesServices from '../services/categoriesServices';

interface createExam {
    link: string;
    name: string;
    teachersId: number;
    categoriesId: number;
}

export async function getByTeacher(teachersId: number) {
    const result = await getRepository(Exams).find({
        relations: ['categories'],
    });
    const filterResult = result.filter((r) => {
        return r.teachersId === teachersId;
    });
    return filterResult;
}

export async function getBySubject() {
    const result = await await getRepository(Exams).find({
        relations: ['categories'],
    });
    return result;
}

export async function insertAnExam(exam: createExam) {
    await getRepository(Exams).insert(exam);
}

export async function checkIfLinkAlreadyExists(link: string) {
    const result = await getRepository(Exams).find({ link });
    if (result.length !== 0) {
        return true;
    } else {
        return false;
    }
}

export async function checkExam(
    link: string,
    teachersId: number,
    categoriesId: number
) {
    const hasLink = await checkIfLinkAlreadyExists(link);
    const hasTeachersId = await teachersServices.checkIfTeachersIdExists(
        teachersId
    );
    const hasCategoriesId = await categoriesServices.checkIfCategoriesIdExists(
        categoriesId
    );
    return { hasLink, hasTeachersId, hasCategoriesId };
}
