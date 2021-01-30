import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SpellEntity } from "../entity/spells/Spell.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { BackfillService } from "../service/backfill.service";
import { BackfillController } from "../controllers/backfill.controller";
import { FeatureEntity } from "../entity/features/feature.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SpellEntity,
      SpellDamageEntity,
      SpellDamageAtLevelEntity,
      FeatureEntity,
    ]),
  ],
  exports: [BackfillService],
  controllers: [BackfillController],
  providers: [BackfillService],
})
export class BackfillModule {}
