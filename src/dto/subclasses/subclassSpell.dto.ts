import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsString,
  IsOptional,
} from "class-validator";
import { PrerequisiteDto } from "../features/prerequisite.dto";

export class SubclassSpellDto {
  @IsString()
  @ApiProperty({ type: String })
  spell: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [PrerequisiteDto] })
  prerequisites?: PrerequisiteDto[];
}
