import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubclassEntity } from "src/entity/subclasses/Subclass.entity";
import { LevelSubclassEntity } from "src/entity/levels/LevelSubclass.entity";
import { SubclassService } from "src/service/subclass.service";
import { SubclassController } from "src/controllers/subclass.controller";
import { SubclassSpellEntity } from "src/entity/subclasses/SubclassSpell.entity";
import { PrerequisiteEntity } from "src/entity/features/prerequisite.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubclassEntity,
      LevelSubclassEntity,
      SubclassSpellEntity,
      PrerequisiteEntity
    ]),
  ],
  exports: [SubclassService],
  controllers: [SubclassController],
  providers: [SubclassService],
})
export class SubclassModule {}
