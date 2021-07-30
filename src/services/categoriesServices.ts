import { getRepository } from 'typeorm';
import Categories from '../entities/Categories';

export async function checkIfCategoriesIdExists(categoriesId: number) {
    const result = await getRepository(Categories).find({ id: categoriesId });
    if (result.length !== 0) {
        return true;
    } else {
        return false;
    }
}
