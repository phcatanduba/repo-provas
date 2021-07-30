require('dotenv').config();

module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    migrationsTableName: 'migrations',
    entities: [
        `${
            process.env.NODE_ENV === 'production' ? 'dist' : 'src'
        }/entities/*.*`,
    ],
    migrations: [
        `${
            process.env.NODE_ENV === 'production' ? 'dist' : 'src'
        }/migrations/*.ts`,
    ],
    cli: {
        migrationsDir: 'src/migrations',
        entitiesDir: 'dist/entities/*.js',
    },
};
