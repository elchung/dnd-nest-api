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
    return await this.backfillService.backfill("Spells", "/api/spells");
  }

  @Get("/5eFeatures")
  async backfillFeatures(): Promise<void> {
    return await this.backfillService.backfill("Features", "/api/features");
  }

  @Get("/5eTraits")
  async backfillTraits(): Promise<void> {
    return await this.backfillService.backfill("Traits", "/api/traits");
  }

  @Get("/5eClasses")
  async backfillClasses(): Promise<void> {
    return await this.backfillService.backfill("Classes", "/api/classes");
  }

  @Get("/5eSubclasses")
  async backfillSubclasses(): Promise<void> {
    return await this.backfillService.backfill("Subclasses", "/api/subclasses");
  }

  @Get("/5eRaces")
  async backfillRaces(): Promise<void> {
    return await this.backfillService.backfill("Races", "/api/races");
  }

  @Get("/5eSubraces")
  async backfillSubraces(): Promise<void> {
    return await this.backfillService.backfill("Subraces", "/api/subraces");
  }

  @Get("/5eItems")
  async backfillItems(): Promise<void> {
    //includes: /equipment /magic-items /weapon-properties
    return await this.backfillService.backfill("Items", "/api/stuff");
  }
}
