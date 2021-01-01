import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BackfillService } from "../service/backfill.service";
import { BackfillMapper } from "../mapper/backfill.mapper";

@ApiTags("backfill")
@Controller("backfill")
export class BackfillController {
  constructor(private readonly backfillService: BackfillService) {}

  @Get("/5eSpells")
  async backfillSpells(): Promise<void> {
    return await this.backfillService.backfill("Spells", "/api/Spells");
  }

  @Get("/5eFeatures")
  async backfillFeatures(): Promise<void> {
    return await this.backfillService.backfill("Features", "/api/Features");
  }
}
