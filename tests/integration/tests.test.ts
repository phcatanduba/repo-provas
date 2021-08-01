import supertest from 'supertest';
import app, { init } from '../../src/app';
import { getConnection, getRepository } from 'typeorm';
import faker from 'faker';
import { clearDatabase } from '../utils/database';
import Exams from '../../src/entities/Exams';

interface Exam {
    name: string;
    link: string;
    teachersId: number;
    categoriesId: number;
}

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await clearDatabase();
});

afterAll(async () => {
    await getConnection().close();
});

describe('POST /exams', () => {
    it('should answer with status 200', async () => {
        const response = await supertest(app).post('/exams').send({
            name: faker.name.title(),
            link: faker.internet.url(),
            teachersId: 1,
            categoriesId: 1,
        });

        expect(response.status).toBe(200);
    });
});

describe('POST /exams', () => {
    it('should answer with status 400', async () => {
        const response = await supertest(app).post('/exams').send({
            name: faker.name.title(),
            link: faker.internet.url(),
            teachersId: 40000,
            categoriesId: 1,
        });

        expect(response.status).toBe(400);
    });
});

describe('POST /exams', () => {
    it('should answer with status 409', async () => {
        const exam: Exam = {
            name: faker.name.title(),
            link: 'www.google.com',
            teachersId: 1,
            categoriesId: 1,
        };
        await getRepository(Exams).insert(exam);
        const response = await supertest(app).post('/exams').send(exam);

        expect(response.status).toBe(409);
    });
});

describe('GET /subjects', () => {
    it('hould answer with a body contains an array type and status 200', async () => {
        const response = await supertest(app).get('/subjects');

        expect(response.status).toBe(200);
    });
});

describe('GET /teachers', () => {
    it('hould answer with a body contains an arraytype and status 200', async () => {
        const response = await supertest(app).get('/teachers');

        expect(response.body).toEqual(expect.arrayContaining([]));
        expect(response.status).toBe(200);
    });
});

describe('GET /exams/teachers', () => {
    it('should answer with a body contains an array and status 200', async () => {
        const response = await supertest(app).get('/teachers');

        expect(response.body).toEqual(expect.arrayContaining([]));
        expect(response.status).toBe(200);
    });
});
