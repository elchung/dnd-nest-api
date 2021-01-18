import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsString, IsOptional, ValidateNested } from "class-validator";
import { LevelSubclassDto } from "../levels/LevelSubclass.dto";
import { SubclassSpellDto } from "./SubclassSpell.dto";

export class SubclassDto {
  @IsString()
  @ApiProperty({ type: String })
  class: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  description: string[];

  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  subclass_flavor: string;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [LevelSubclassDto] })
  sublclass_levels: LevelSubclassDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [SubclassSpellDto] })
  spells: SubclassSpellDto[];
}
