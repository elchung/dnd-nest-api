import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CharacterService } from "../service/character.service";
import { CharacterController } from "../controllers/character.controller";
import { CharacterData } from "../entity/CharacterData.entity";
import {CharacterAbilityScores} from "../entity/CharacterAbilityScores.entity";
import {CharacterDeathSaves} from "../entity/CharacterDeathSaves.entity";
import {CharacterFeaturesAndTraits} from "../entity/CharacterFeaturesAndTraits.entity";
import {CharacterHitDice} from "../entity/CharacterHitDice.entity";
import {CharacterKnownSpells} from "../entity/CharacterKnownSpells.entity";
import {CharacterSheetSettings} from "../entity/CharacterSheetSettings.entity";
import {CharacterSpellSlots} from "../entity/CharacterSpellSlots.entity";
import {CharacterSpellSlotsAtLevel} from "../entity/CharacterSpellSlotsAtLevel.entity";
import {CharacterTreasure} from "../entity/CharacterTreasure.entity";
import {CharacterTreasureItem} from "../entity/CharacterTreasureItem.entity";
import {CharacterTreasureMoney} from "../entity/CharacterTreasureMoney.entity";


@Module({
  imports: [TypeOrmModule.forFeature([
    CharacterData,
    CharacterAbilityScores,
    CharacterDeathSaves,
    CharacterFeaturesAndTraits,
    CharacterHitDice,
    CharacterKnownSpells,
    CharacterSheetSettings,
    CharacterSpellSlots,
    CharacterSpellSlotsAtLevel,
    CharacterTreasure,
    CharacterTreasureItem,
    CharacterTreasureMoney
  ])],
  exports: [
    CharacterService
  ],
  controllers: [
    CharacterController
  ],
  providers: [
    CharacterService
  ],
})
export class CharacterModule {}
