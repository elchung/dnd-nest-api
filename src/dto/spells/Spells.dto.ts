import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
  ValidateNested,
} from "class-validator";
import { SpellDamageDto } from "./SpellDamage.dto";

export class SpellsDto {
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsString()
  @ApiProperty({ type: String })
  description: string;

  @IsString()
  @ApiProperty({ type: String })
  higherLevel: string;

  @IsString()
  @ApiProperty({ type: String })
  range: string;

  @IsArray()
  @ApiProperty({ type: [String] })
  components: string;

  @IsString()
  @ApiProperty({ type: String })
  materials: string;

  @IsBoolean()
  @ApiProperty({ type: Boolean })
  ritual: boolean;

  @IsString()
  @ApiProperty({ type: String })
  duration: string;

  @IsBoolean()
  @ApiProperty({ type: Boolean })
  concentration: boolean;

  @IsString()
  @ApiProperty({ type: String })
  castingTime: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  level: number;

  @IsString()
  @ApiProperty({ type: String })
  attackType: string;

  @IsString()
  @ApiProperty({ type: String })
  school: string;

  @IsArray()
  @ApiPropertyOptional({ type: [String] })
  classes: string[];

  @ValidateNested()
  @ApiProperty({ type: SpellDamageDto })
  damage: SpellDamageDto;
}
