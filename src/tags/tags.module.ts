import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from 'src/tags/tag.entity';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  exports: [
    TypeOrmModule,
  ],
  imports: [
    TypeOrmModule.forFeature([
      Tag,
    ]),
  ],
  controllers: [
    TagController,
  ],
  providers: [
    TagService,
  ]
})
export class TagsModule {}
