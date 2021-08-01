import supertest from 'supertest';
import app from '../../src/app';

describe('GET /test', () => {
    it('should answer with text "OK!" and status 200', async () => {
        const response = await supertest(app).get('/subjects');
        expect(response.text).toBe('OK!');
        expect(response.status).toBe(200);
    });
});
