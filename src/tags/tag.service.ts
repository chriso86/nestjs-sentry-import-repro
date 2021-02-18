import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Tag } from 'src/tags/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService extends TypeOrmCrudService<Tag> {
  public constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {
    super(tagRepository);
  }
}
