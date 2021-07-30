require('dotenv').config();

module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    migrationsTableName: 'migrations',
    entities: [
        `${process.env.NODE_ENV === undefined ? 'dist' : 'src'}/entities/*.*`,
    ],
    migrations: [
        `${process.env.NODE_ENV === undefined ? 'dist' : 'src'}/entities/*.*`,
    ],
    cli: {
        migrationsDir: 'src/migrations',
        entitiesDir: 'dist/entities/*.js',
    },
};
