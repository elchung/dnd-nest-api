import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClassController } from "src/controllers/class.controller";
import { ClassEntity } from "src/entity/classes/Class.entity";
import { ClassSpellcastingEntity } from "src/entity/classes/ClassSpellcasting.entity";
import { InfoEntity } from "src/entity/general/Info.entity";
import { OptionsEntity } from "src/entity/general/Options.entity";
import { LevelClassEntity } from "src/entity/levels/LevelClass.entity";
import { LevelClassSpecificEntity } from "src/entity/levels/LevelClassSpecific.entity";
import { LevelClassCreatingSpellSlotsEntity } from "src/entity/levels/LevelClassCreatingSpellSlots.entity";
import { LevelOptionsDiceEntity } from "src/entity/levels/LevelOptionsDice.entity";
import { LevelSpellcastingEntity } from "src/entity/levels/LevelSpellcasting.entity";
import { LevelSubclassEntity } from "src/entity/levels/LevelSubclass.entity";
import { ClassService } from "src/service/class.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ClassEntity,
      LevelClassEntity,
      LevelClassSpecificEntity,
      LevelSpellcastingEntity,
      LevelSubclassEntity,
      LevelClassCreatingSpellSlotsEntity,
      LevelOptionsDiceEntity,
      OptionsEntity,
      ClassSpellcastingEntity,
      InfoEntity,
    ]),
  ],
  exports: [ClassService],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
