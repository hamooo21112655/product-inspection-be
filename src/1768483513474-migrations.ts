import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1768483513474 implements MigrationInterface {
    name = 'Migrations1768483513474'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`serialNumber\` \`serialNumber\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`serialNumber\` \`serialNumber\` varchar(255) NOT NULL`);
    }

}
