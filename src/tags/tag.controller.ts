import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { TagCreationDto } from 'src/tags/tag-creation.dto';
import { TagUpdateDto } from 'src/tags/tag-update.dto';
import { Tag } from 'src/tags/tag.entity';
import { TagService } from 'src/tags/tag.service';

@Crud({
  model: {
    type: Tag,
  },
  dto: {
    create: TagCreationDto,
    update: TagUpdateDto,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  routes: {
    only: [
      'getManyBase',
      'getOneBase',
      'createOneBase',
      'createManyBase',
    ],
  },
})
@Controller('tags')
export class TagController implements CrudController<Tag> {
  public constructor(
    public service: TagService,
  ) {
  }
}
