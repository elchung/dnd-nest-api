import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CharacterService } from "../service/character.service";
import { CharacterController } from "../controllers/character.controller";
import { CharacterDataEntity } from "../entity/character/CharacterData.entity";
import { CharacterAbilityScoresEntity } from "../entity/character/CharacterAbilityScores.entity";
import { CharacterDeathSavesEntity } from "../entity/character/CharacterDeathSaves.entity";
import { CharacterFeaturesAndTraitsEntity } from "../entity/character/CharacterFeaturesAndTraits.entity";
import { CharacterHitDiceEntity } from "../entity/character/CharacterHitDice.entity";
import { CharacterKnownSpellsEntity } from "../entity/character/CharacterKnownSpells.entity";
import { CharacterSheetSettingsEntity } from "../entity/character/CharacterSheetSettings.entity";
import { CharacterSpellSlotsEntity } from "../entity/character/CharacterSpellSlots.entity";
import { CharacterSpellSlotsAtLevelEntity } from "../entity/character/CharacterSpellSlotsAtLevel.entity";
import { CharacterTreasureEntity } from "../entity/character/CharacterTreasure.entity";
import { CharacterTreasureItemEntity } from "../entity/character/CharacterTreasureItem.entity";
import { CharacterTreasureMoneyEntity } from "../entity/character/CharacterTreasureMoney.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CharacterDataEntity,
      CharacterAbilityScoresEntity,
      CharacterDeathSavesEntity,
      CharacterFeaturesAndTraitsEntity,
      CharacterHitDiceEntity,
      CharacterKnownSpellsEntity,
      CharacterSheetSettingsEntity,
      CharacterSpellSlotsEntity,
      CharacterSpellSlotsAtLevelEntity,
      CharacterTreasureEntity,
      CharacterTreasureItemEntity,
      CharacterTreasureMoneyEntity,
    ]),
  ],
  exports: [CharacterService],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
