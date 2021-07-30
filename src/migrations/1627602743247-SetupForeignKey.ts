import {MigrationInterface, QueryRunner} from "typeorm";

export class SetupDatabase21627602743247 implements MigrationInterface {
    name = 'SetupDatabase21627602743247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_eb4f7bc499c79b26557b59a2b33"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_8cddcee1efcc115732e637dc076"`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "teachersId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "categoriesId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_eb4f7bc499c79b26557b59a2b33" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_8cddcee1efcc115732e637dc076" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_8cddcee1efcc115732e637dc076"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_eb4f7bc499c79b26557b59a2b33"`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "categoriesId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "teachersId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_8cddcee1efcc115732e637dc076" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_eb4f7bc499c79b26557b59a2b33" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
