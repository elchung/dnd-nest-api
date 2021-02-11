import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BackfillService } from "../service/backfill.service";

@ApiTags("backfill/5e")
@Controller("backfill/5e")
export class BackfillController {
  constructor(private readonly backfillService: BackfillService) {}

  @Get("/Spells")
  async backfillSpells(): Promise<void> {
    return await this.backfillService.backfill("Spells", "/api/spells");
  }

  @Get("/Features")
  async backfillFeatures(): Promise<void> {
    return await this.backfillService.backfill("Features", "/api/features");
  }

  @Get("/Traits")
  async backfillTraits(): Promise<void> {
    return await this.backfillService.backfill("Traits", "/api/traits");
  }

  @Get("Classes")
  async backfillClasses(): Promise<void> {
    return await this.backfillService.backfill("Classes", "/api/classes");
  }

  @Get("/Subclasses")
  async backfillSubclasses(): Promise<void> {
    return await this.backfillService.backfill("Subclasses", "/api/subclasses");
  }

  @Get("/Races")
  async backfillRaces(): Promise<void> {
    return await this.backfillService.backfill("Races", "/api/races");
  }

  @Get("/Subraces")
  async backfillSubraces(): Promise<void> {
    return await this.backfillService.backfill("Subraces", "/api/subraces");
  }

  @Get("/Items")
  async backfillItems(): Promise<void> {
    //includes: /equipment /magic-items /weapon-properties
    return await this.backfillService.backfill("Items", "/api/stuff");
  }
}
