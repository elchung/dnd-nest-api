import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { LevelClassCreatingSpellSlotsDto } from "./LevelClassCreatingSpellSlots.dto";
import { LevelOptionsDiceDto } from "./LevelOptionsDice.dto";

export class LevelClassDto {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  action_surges: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  arcane_recovery_levels: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  aura_range: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  bardic_inspiration_die: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  brutal_critical_dice: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  channel_divinity_charges: number;
  
  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: [LevelClassCreatingSpellSlotsDto] })
  creating_spell_slots: LevelClassCreatingSpellSlotsDto[];
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  destroy_undead_cr: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  extra_attacks: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  favored_enemies: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  favored_terrain: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  indomitable_uses: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  invocations_known: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  ki_points: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  magical_secrets_max_5: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  magical_secrets_max_7: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  magical_secrets_max_9: number;
  
  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: LevelOptionsDiceDto })
  martial_arts: LevelOptionsDiceDto;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  metamagic_known: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  mystic_arcanum_level_6: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  mystic_arcanum_level_7: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  mystic_arcanum_level_8: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  mystic_arcanum_level_9: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  rage_count: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  rage_damage_bonus: number;

  @ValidateNested()
  @IsOptional()
  @ApiPropertyOptional({ type: LevelOptionsDiceDto })
  sneak_attack: LevelOptionsDiceDto;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  song_of_rest_die: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  sorcery_points: number;
  
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  unarmored_movement: number;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ type: Boolean })
  wild_shape_fly: boolean;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ type: Number })
  wild_shape_max_cr: number;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ type: Boolean })
  wild_shape_swim: boolean;
}