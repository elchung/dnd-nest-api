import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RaceController } from "src/controllers/race.controller";
import { AbilityScoreBonusEntity } from "src/entity/general/AbilityScoreBonus.entity";
import { OptionsEntity } from "src/entity/general/Options.entity";
import { RaceEntity } from "src/entity/races/Race.entity";
import { RaceService } from "src/service/race.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RaceEntity,
      OptionsEntity,
      AbilityScoreBonusEntity
    ]),
  ],
  exports: [RaceService],
  controllers: [RaceController],
  providers: [RaceService],
})
export class RaceModule {}
