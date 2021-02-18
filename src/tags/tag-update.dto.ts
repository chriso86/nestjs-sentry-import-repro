import { IsOptional, IsString, IsUUID } from 'class-validator';

export class TagUpdateDto {
  @IsUUID()
  @IsOptional()
  public id: string;

  @IsOptional()
  @IsString()
  public label: string;
}
