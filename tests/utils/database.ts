import { getRepository } from 'typeorm';

import Exams from '../../src/entities/Exams';

export async function clearDatabase() {
    await getRepository(Exams).delete({});
}
