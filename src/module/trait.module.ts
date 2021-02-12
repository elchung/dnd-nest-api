import { Module } from "@nestjs/common";
import { OptionsEntity } from "../entity/general/Options.entity";
import { TraitController } from "../controllers/trait.controller";
import { TraitEntity } from "../entity/general/Trait.entity";
import { TraitService } from "../service/trait.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TraitEntity,
      OptionsEntity,
    ]),
  ],
  exports: [TraitService],
  controllers: [TraitController],
  providers: [TraitService],
})
export class TraitModule {}
