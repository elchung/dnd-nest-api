import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber } from "class-validator";
import { TraitDto } from "./Trait.dto";

export class RacialTraitOptionsDto {
  @IsArray()
  @ApiProperty({ type: [TraitDto] })
  from: TraitDto[];

  @IsNumber()
  @ApiProperty({ type: Number })
  choose: number;
}
