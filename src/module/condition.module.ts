import { ConditionController } from "../controllers/condition.controller";
import { ConditionEntity } from "../entity/general/Condition.entity";
import { ConditionService } from "../service/condition.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ConditionEntity
    ]),
  ],
  exports: [ConditionService],
  controllers: [ConditionController],
  providers: [ConditionService],
})
export class ConditionModule {}
