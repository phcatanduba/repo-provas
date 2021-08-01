import Subject from '../entities/Subjects';
import { getRepository } from 'typeorm';

export async function getAll() {
    const result = await getRepository(Subject)
        .createQueryBuilder('subjects')
        .orderBy('quarter', 'ASC')
        .getMany();
    return result;
}

export async function checkIfIdExists(subjectId: number) {
    const result = await getRepository(Subject).find({ id: subjectId });
    if (result.length !== 0) {
        return true;
    } else {
        return false;
    }
}
