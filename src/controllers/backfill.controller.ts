import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BackfillService } from "../service/backfill.service";

@ApiTags("backfill")
@Controller("backfill")
export class BackfillController {
  constructor(private readonly backfillService: BackfillService) {}

  @Get("/5eSpells")
  async backfillSpells(): Promise<void> {
    return await this.backfillService.backfillSpells();
  }
}
