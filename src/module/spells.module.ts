import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SpellEntity } from "../entity/spells/Spell.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { SpellsController } from "../controllers/spell.controller";
import { SpellService } from "../service/spell.service";
import { SpellAreaOfEffectEntity } from "src/entity/spells/SpellAreaOfEffect.entity";
import { SpellDcEntity } from "src/entity/spells/SpellDc.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SpellEntity,
      SpellDamageEntity,
      SpellDamageAtLevelEntity,
      SpellAreaOfEffectEntity,
      SpellDcEntity,
    ]),
  ],
  exports: [SpellService],
  controllers: [SpellsController],
  providers: [SpellService],
})
export class SpellsModule {}
