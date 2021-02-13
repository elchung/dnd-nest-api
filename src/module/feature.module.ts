import { FeatureController } from "../controllers/feature.controller";
import { FeatureEntity } from "../entity/features/feature.entity";
import { FeatureService } from "../service/feature.service";
import { Module } from "@nestjs/common";
import { OptionsEntity } from "../entity/general/Options.entity";
import { PrerequisiteEntity } from "../entity/features/prerequisite.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FeatureEntity,
      OptionsEntity,
      PrerequisiteEntity,
    ]),
  ],
  exports: [FeatureService],
  controllers: [FeatureController],
  providers: [FeatureService],
})
export class FeatureModule {}
