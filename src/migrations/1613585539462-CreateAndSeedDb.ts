import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAndSeedDb1613585539462 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`
      
      INSERT INTO public.tag(id, label, "createdAt", "updatedAt") VALUES (uuid_generate_v4(), 'Business', current_timestamp, current_timestamp);
      INSERT INTO public.tag(id, label, "createdAt", "updatedAt") VALUES (uuid_generate_v4(), 'Crime', current_timestamp, current_timestamp);
      INSERT INTO public.tag(id, label, "createdAt", "updatedAt") VALUES (uuid_generate_v4(), 'Demographics', current_timestamp, current_timestamp);
      INSERT INTO public.tag(id, label, "createdAt", "updatedAt") VALUES (uuid_generate_v4(), 'Finance', current_timestamp, current_timestamp);
      INSERT INTO public.tag(id, label, "createdAt", "updatedAt") VALUES (uuid_generate_v4(), 'Healthcare', current_timestamp, current_timestamp);
      INSERT INTO public.tag(id, label, "createdAt", "updatedAt") VALUES (uuid_generate_v4(), 'History', current_timestamp, current_timestamp);
      INSERT INTO public.tag(id, label, "createdAt", "updatedAt") VALUES (uuid_generate_v4(), 'Internet', current_timestamp, current_timestamp);
      INSERT INTO public.tag(id, label, "createdAt", "updatedAt") VALUES (uuid_generate_v4(), 'Linguistics', current_timestamp, current_timestamp);
      INSERT INTO public.tag(id, label, "createdAt", "updatedAt") VALUES (uuid_generate_v4(), 'Politics', current_timestamp, current_timestamp);
      
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.query(`
      
      DELETE FROM public.tag;
      
      `);
    }

}
