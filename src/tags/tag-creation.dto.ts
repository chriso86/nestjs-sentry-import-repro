import { IsString } from 'class-validator';

export class TagCreationDto {
  @IsString()
  public label: string;
}
