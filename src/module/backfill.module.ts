import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SpellsEntity } from "../entity/spells/Spells.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { BackfillService } from "../service/backfill.service";
import { BackfillController } from "../controllers/backfill.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SpellsEntity,
      SpellDamageEntity,
      SpellDamageAtLevelEntity,
    ]),
  ],
  exports: [BackfillService],
  controllers: [BackfillController],
  providers: [BackfillService],
})
export class BackfillModule {}
