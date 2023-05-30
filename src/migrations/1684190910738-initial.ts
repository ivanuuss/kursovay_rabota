import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1684190910738 implements MigrationInterface {
    name = 'Initial1684190910738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "workshop_dishes" ("dishes_id" integer NOT NULL, "workshop_id" integer NOT NULL, CONSTRAINT "PK_7b10fa486b5d596a33465ea06d6" PRIMARY KEY ("dishes_id", "workshop_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0b312ca90106d2ebcf49fd70cc" ON "workshop_dishes" ("dishes_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_0b1df604ecbe82e7613b78d154" ON "workshop_dishes" ("workshop_id") `);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "workshops_id_seq" OWNED BY "workshops"."id"`);
        await queryRunner.query(`ALTER TABLE "workshops" ALTER COLUMN "id" SET DEFAULT nextval('"workshops_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "workshops" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "workshop_dishes" ADD CONSTRAINT "FK_0b312ca90106d2ebcf49fd70cc9" FOREIGN KEY ("dishes_id") REFERENCES "dishes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "workshop_dishes" ADD CONSTRAINT "FK_0b1df604ecbe82e7613b78d154b" FOREIGN KEY ("workshop_id") REFERENCES "workshops"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workshop_dishes" DROP CONSTRAINT "FK_0b1df604ecbe82e7613b78d154b"`);
        await queryRunner.query(`ALTER TABLE "workshop_dishes" DROP CONSTRAINT "FK_0b312ca90106d2ebcf49fd70cc9"`);
        await queryRunner.query(`ALTER TABLE "workshops" ALTER COLUMN "id" SET DEFAULT nextval('workshop_id_seq')`);
        await queryRunner.query(`ALTER TABLE "workshops" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "workshops_id_seq"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0b1df604ecbe82e7613b78d154"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0b312ca90106d2ebcf49fd70cc"`);
        await queryRunner.query(`DROP TABLE "workshop_dishes"`);
    }

}
