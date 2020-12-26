import { ApiTags } from "@nestjs/swagger";
import { Controller, Get } from "@nestjs/common";
import { AppService } from "../service/app.service";

@ApiTags("app")
@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCharacterById(): string {
    return this.appService.getHello();
  }
}
