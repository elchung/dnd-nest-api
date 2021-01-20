import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SpellsEntity } from "../entity/spells/Spells.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { SpellsDto } from "../dto/spells/Spells.dto";
import { SpellsMapper } from "../mapper/spells.mapper";

@Injectable()
export class SpellsService {
  constructor(
    @InjectRepository(SpellsEntity)
    private spellsRepository: Repository<SpellsEntity>,

    @InjectRepository(SpellDamageEntity)
    private spellDamageRepository: Repository<SpellDamageEntity>,

    @InjectRepository(SpellDamageAtLevelEntity)
    private spellDamageAtLevelRepository: Repository<SpellDamageAtLevelEntity>
  ) {}

  private spellMapper = new SpellsMapper();

  async getAllSpells(): Promise<any> {
    return await this.spellsRepository.find();
  }

  async getSpells(spellNames: string[]): Promise<any> {
    const whereOptions = spellNames.map((spellName) => ({ name: spellName }));
    let builder = await this.spellsRepository
      .createQueryBuilder("spells")
      .where("spells.name is not null");

    spellNames.forEach((spellName) => {
      builder = builder.orWhere("LOWER(spells.name) = LOWER(:name)", {
        spellName,
      });
    });

    return await builder.getMany();
  }

  async getAllSpellNames(): Promise<string[]> {
    return this.spellMapper.spellNamesEntityToList(
      await this.spellsRepository
        .createQueryBuilder("spells")
        .select(["spells.name"])
        .getMany()
    );
  }

  async getSpellWithName(name: string): Promise<any> {
    return await this.spellsRepository
      .createQueryBuilder("spells")
      .where("LOWER(spells.name) = LOWER(:name)", { name })
      .getOne();
  }

  async updateSpellWithName(
    name: string,
    updatedSpell: SpellsDto
  ): Promise<void> {
    await this.spellsRepository
      .createQueryBuilder()
      .update(SpellsEntity)
      .set(updatedSpell)
      .where("name = :name", { name: name })
      .execute();
  }

  async createSpellWithName(newSpell: SpellsDto): Promise<void> {
    if (!newSpell.name || (await this.getSpellWithName(newSpell.name))) {
      throw new Error("Spell already exists with that name");
    }

    const newSpellEntity = this.spellMapper.spellDtoToEntity(newSpell);
    await this.spellsRepository.save(newSpellEntity);
  }

  async deleteSpellWithName(name): Promise<void> {
    await this.spellsRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}
