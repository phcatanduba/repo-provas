import {MigrationInterface, QueryRunner} from "typeorm";

export class SetupDatabase1627597298346 implements MigrationInterface {
    name = 'SetupDatabase1627597298346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teachers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "subjectsId" integer, CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exams" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "link" character varying NOT NULL, "teachersId" integer, "categoriesId" integer, CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "teachers" ADD CONSTRAINT "FK_3c0e8ef8cb79361189130e3522f" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_eb4f7bc499c79b26557b59a2b33" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_8cddcee1efcc115732e637dc076" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_8cddcee1efcc115732e637dc076"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_eb4f7bc499c79b26557b59a2b33"`);
        await queryRunner.query(`ALTER TABLE "teachers" DROP CONSTRAINT "FK_3c0e8ef8cb79361189130e3522f"`);
        await queryRunner.query(`DROP TABLE "exams"`);
        await queryRunner.query(`DROP TABLE "teachers"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
