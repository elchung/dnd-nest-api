import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SpellEntity } from "../entity/spells/Spell.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { BackfillService } from "../service/backfill.service";
import { BackfillController } from "../controllers/backfill.controller";
import { FeatureEntity } from "../entity/features/feature.entity";
import { RaceEntity } from "src/entity/races/Race.entity";
import { TraitEntity } from "src/entity/general/Trait.entity";
import { SubraceEntity } from "src/entity/subraces/Subrace.entity";
import { SubclassEntity } from "src/entity/subclasses/Subclass.entity";
import { ClassEntity } from "src/entity/classes/Class.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SpellEntity,
      SpellDamageEntity,
      SpellDamageAtLevelEntity,
      FeatureEntity,
      TraitEntity,
      RaceEntity,
      SubraceEntity,
      SubclassEntity,
      ClassEntity
    ]),
  ],
  exports: [BackfillService],
  controllers: [BackfillController],
  providers: [BackfillService],
})
export class BackfillModule {}
