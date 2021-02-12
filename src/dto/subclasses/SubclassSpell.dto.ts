import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsOptional, IsString } from "class-validator";
import { PrerequisiteDto } from "../features/Prerequisite.dto";

export class SubclassSpellDto {
  @IsString()
  @ApiProperty({ type: String })
  spell: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [PrerequisiteDto] })
  prerequisites?: PrerequisiteDto[];
}
