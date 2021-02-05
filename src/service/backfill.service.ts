import axios from "axios";
import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SpellEntity } from "../entity/spells/Spell.entity";
import { BackfillMapper } from "../mapper/backfill.mapper";
import { FeatureEntity } from "../entity/features/feature.entity";
import { TraitEntity } from "../entity/general/Trait.entity";
import { RaceEntity } from "../entity/races/Race.entity";
import { SubraceEntity } from "../entity/subraces/Subrace.entity";
//todo add check to make sure name for backfill service is unique (fail or just update if name already exists)
@Injectable()
export class BackfillService {
  constructor(
    @InjectRepository(SpellEntity)
    private spellsRepository: Repository<SpellEntity>,

    @InjectRepository(FeatureEntity)
    private featureRepository: Repository<FeatureEntity>,

    @InjectRepository(TraitEntity)
    private traitRepository: Repository<TraitEntity>,

    @InjectRepository(RaceEntity)
    private raceRepository: Repository<RaceEntity>,

    @InjectRepository(SubraceEntity)
    private subraceRepository: Repository<SubraceEntity>
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
    // using 'for..of..' for async compatibility
    for (const idx of indexList) {
      console.log(
        `${count} of ${indexList.length}: Getting data for ${idx.name} at ${
          this.apiUrlBase + urlSuffix
        }`
      );
      try {
        const data = (await axios.get(this.apiUrlBase + idx.url)).data;
        console.info(`received data for ${idx.name}: ${JSON.stringify(data)}`);
        switch (name) {
          case "Spell": {
            await this.save(
              this.backfillMapper.spellResponseToEntity(data),
              this.spellsRepository
            );
            break;
          }
          case "Feature": {
            await this.save(
              this.backfillMapper.featureResponseToEntity(data),
              this.featureRepository
            );
            break;
          }
          case "Classes": {
            // todo need to recursively query for nested fields
            break;
          }
          case "Subclasses": {
            // todo need to recursively query for nested fields
            break;
          }
          case "Races": {
            await this.save(
              this.backfillMapper.raceResponseToEntity(data),
              this.raceRepository
            );
            break;
          }
          case "Subraces": {
            await this.save(
              this.backfillMapper.subraceResponseToEntity(data),
              this.subraceRepository
            );
            break;
          }
          case "Traits": {
            await this.save(
              this.backfillMapper.traitResponseToEntity(data),
              this.traitRepository
            );
            break;
          }
          case "Items": {
            // todo need to recursively query for nested fields
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
  async save(entity: any, repo: Repository<any>): Promise<void> {
    console.info(`saving..`);
    await repo.save(entity);
  }
}

interface indexListInterface {
  index: string;
  name: string;
  url: string;
}
