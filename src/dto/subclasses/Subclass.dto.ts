import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsString, IsOptional, ValidateNested } from "class-validator";
import { LevelClassDto } from "../levels/LevelClass.dto";
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
  subclassFlavor: string;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [LevelClassDto] })
  sublclassLevels: LevelClassDto;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [SubclassSpellDto] })
  spells: SubclassSpellDto[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  source: string;
}
