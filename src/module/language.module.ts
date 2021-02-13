import { LanguageController } from "../controllers/language.controller";
import { LanguageEntity } from "../entity/general/Language.entity";
import { LanguageService } from "../service/language.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LanguageEntity
    ]),
  ],
  exports: [LanguageService],
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class LanguageModule {}
