import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubraceController } from "src/controllers/subrace.controller";
import { AbilityScoreBonusEntity } from "src/entity/general/AbilityScoreBonus.entity";
import { OptionsEntity } from "src/entity/general/Options.entity";
import { SubraceEntity } from "src/entity/subraces/Subrace.entity";
import { SubraceService } from "src/service/subrace.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubraceEntity,
      AbilityScoreBonusEntity,
      OptionsEntity,
    ]),
  ],
  exports: [SubraceService],
  controllers: [SubraceController],
  providers: [SubraceService],
})
export class SubraceModule {}
