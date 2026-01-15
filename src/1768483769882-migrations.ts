import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1768483769882 implements MigrationInterface {
    name = 'Migrations1768483769882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`serialNumber\` \`serialNumber\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`description\` \`description\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`serialNumber\` \`serialNumber\` varchar(255) NOT NULL`);
    }

}
