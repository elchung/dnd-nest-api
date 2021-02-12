import * as dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: __dirname + "/../../.env" });
}
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle("DnD API")
    .setDescription("API to CRUD dnd info")
    .setVersion("0.0.1")
    .addTag("character")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
