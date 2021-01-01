import axios from "axios";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SpellsEntity } from "../entity/spells/Spells.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { SpellDcEntity } from "../entity/spells/SpellDc.entity";
import { SpellAreaOfEffectEntity } from "../entity/spells/SpellAreaOfEffect.entity";
import { BackfillMapper } from "../mapper/backfill.mapper";
import { FeatureEntity } from "../entity/features/feature.entity";

@Injectable()
export class BackfillService {
  constructor(
    @InjectRepository(SpellsEntity)
    private spellsRepository: Repository<SpellsEntity>,

    @InjectRepository(FeatureEntity)
    private featureRepository: Repository<FeatureEntity>
  ) {}
  private apiUrlBase = "http://www.dnd5eapi.co";
  private backfillMapper = new BackfillMapper();

  private async getIndexList(urlSuffix: string): Promise<indexListInterface[]> {
    return (await axios.get(this.apiUrlBase + urlSuffix)).data.results;
  }

  async backfill(name: string, urlSuffix: string): Promise<void> {
    console.log(`Getting ${name} list...`);
    const indexList = await this.getIndexList(urlSuffix);
    console.log(`${indexList.length} ${name}s found`);

    let count = 1;
    const failed = [];
    for (const idx of indexList) {
      // using 'for..of..' for async compatibility
      console.log(
        `${count} of ${indexList.length}: Getting data for ${idx.name} at ${
          this.apiUrlBase + urlSuffix
        }`
      );
      try {
        const data = (await axios.get(this.apiUrlBase + idx.url)).data;
        console.info(`received data for ${idx.name}: ${JSON.stringify(data)}`);
        switch (name) {
          //todo convert these to enums (+in controller...wait if i print will it print the number or name?)
          case "Spell": {
            const entity = this.backfillMapper.spellResponseToEntity(data);
            await this.saveSpell(entity);
            break;
          }
          case "Feature": {
            const entity = this.backfillMapper.featureResponseToEntity(data);
            await this.saveFeature(entity);
            break;
          }
          default: {
            break;
          }
        }
      } catch (err) {
        console.error(err);
        failed.push(idx.name);
      }
      count++;
    }
    console.info(`Done. Failed ${name}s: ${failed}`);
  }

  async saveSpell(spellEntity: SpellsEntity): Promise<void> {
    console.info("Saving Spell...");
    await this.spellsRepository.save(spellEntity);
  }

  async saveFeature(featureEntity: FeatureEntity): Promise<void> {
    console.info("Saving Feature...");
    await this.featureRepository.save(featureEntity);
  }
}

interface indexListInterface {
  index: string;
  name: string;
  url: string;
}
