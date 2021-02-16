import { ApiTags } from "@nestjs/swagger";
import { AppService } from "../service/app.service";
import { Controller, Get } from "@nestjs/common";

@ApiTags("app")
@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  helloWorld(): string {
    return this.appService.getHello();
  }
}
