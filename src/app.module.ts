import * as dotenv from "dotenv";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CharacterModule } from "./module/character.module";
import { AppService } from "./service/app.service";
import { AppController } from "./controllers/app.controller";
import { SpellsModule } from "./module/spells.module";
import { BackfillModule } from "./module/backfill.module";
import { SubclassModule } from "./module/subclass.module";
import { ClassModule } from "./module/class.module";
import { RaceModule } from "./module/race.module";
import { SubraceModule } from "./module/subrace.module";

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
  ],
  exports: [AppService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
