import * as dotenv from "dotenv";
import { AppController } from "./controllers/app.controller";
import { AppService } from "./service/app.service";
import { BackfillModule } from "./module/backfill.module";
import { CharacterModule } from "./module/character.module";
import { ClassModule } from "./module/class.module";
import {ConditionModule} from "./module/condition.module";
import {FeatureModule} from "./module/feature.module";
import {LanguageModule} from "./module/language.module";
import { Module } from "@nestjs/common";
import { RaceModule } from "./module/race.module";
import { SpellsModule } from "./module/spells.module";
import { SubclassModule } from "./module/subclass.module";
import { SubraceModule } from "./module/subrace.module";
import {TraitModule} from "./module/trait.module";
import { TypeOrmModule } from "@nestjs/typeorm";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: __dirname + "/../.env" });
}

if (
  !process.env.DB_USER_NAME ||
  !process.env.DB_HOST ||
  !process.env.DB_NAME ||
  !process.env.DB_USER_PASSWORD ||
  !process.env.DB_PORT
) {
  console.error(`DB_USER_NAME: ${process.env.DB_USER_NAME}`)
  console.error(`DB_HOST: ${process.env.DB_HOST}`)
  console.error(`DB_NAME: ${process.env.DB_NAME}`)
  console.error(`DB_USER_PASSWORD: ${process.env.DB_USER_PASSWORD}`)
  console.error(`DB_PORT: ${process.env.DB_PORT}`)
  throw new Error("Missing db variables.");
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER_NAME,
      password: process.env.DB_USER_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + "/**/**/*.entity.{js,ts}"],
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    CharacterModule,
    SpellsModule,
    BackfillModule,
    SubclassModule,
    ClassModule,
    RaceModule,
    SubraceModule,
    TraitModule,
    FeatureModule,
    ConditionModule,
    LanguageModule,
  ],
  exports: [AppService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
