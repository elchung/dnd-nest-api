import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SpellsEntity } from "../entity/spells/Spells.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { SpellsController } from "../controllers/spells.controller";
import { SpellsService } from "../service/spells.service";
import { SpellAreaOfEffectEntity } from "src/entity/spells/SpellAreaOfEffect.entity";
import { SpellDcEntity } from "src/entity/spells/SpellDc.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SpellsEntity,
      SpellDamageEntity,
      SpellDamageAtLevelEntity,
      SpellAreaOfEffectEntity,
      SpellDcEntity,
    ]),
  ],
  exports: [SpellsService],
  controllers: [SpellsController],
  providers: [SpellsService],
})
export class SpellsModule {}
