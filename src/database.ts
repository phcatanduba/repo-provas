import { getConnectionManager } from 'typeorm';
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
    dotenv.config({
        path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
    });
}

export default async function connectDatabase() {
    const connectionManager = await getConnectionManager();
    const connection = connectionManager.create({
        name: 'default',
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: ['src/entities/*.ts'],
        ssl: {
            rejectUnauthorized: false,
        },
    });
    await connection.connect();
}
