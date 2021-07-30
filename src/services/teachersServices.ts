import { getRepository } from 'typeorm';
import Teacher from '../entities/Teachers';

export async function checkIfTeachersIdExists(teachersId: number) {
    const result = await getRepository(Teacher).find({ id: teachersId });

    if (result.length !== 0) {
        return true;
    } else {
        return false;
    }
}

export async function getAll() {
    const result = await getRepository(Teacher).find();
    return result;
}
