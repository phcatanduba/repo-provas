import { getConnectionManager } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const { DB_URL } = process.env;

export default async function connectDatabase() {
    const connectionManager = await getConnectionManager();
    const connection = connectionManager.create({
        name: 'default',
        type: 'postgres',
        url: DB_URL || process.env.DATABASE_URL,
        entities: ['src/entities/*.ts'],
    });
    await connection.connect();
}
