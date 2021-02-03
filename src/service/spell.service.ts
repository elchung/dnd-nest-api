import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SpellEntity } from "../entity/spells/Spell.entity";
import { SpellsDto } from "../dto/spells/Spells.dto";
import { SpellsMapper } from "../mapper/spells.mapper";

@Injectable()
export class SpellService {
  constructor(
    @InjectRepository(SpellEntity)
    private spellRepository: Repository<SpellEntity>
  ) {}

  private spellMapper = new SpellsMapper();

  async getAllSpells(): Promise<any> {
    return await this.spellRepository.find();
  }

  async getSpells(spellNames: string[]): Promise<any> {
    const whereOptions = spellNames.map((spellName) => ({ name: spellName }));
    let builder = await this.spellRepository
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
    return (
      await this.spellRepository
        .createQueryBuilder("spells")
        .select(["spells.name"])
        .getMany()
    ).map((spell) => spell.name);
  }

  async getSpellWithName(name: string): Promise<any> {
    return await this.spellRepository
      .createQueryBuilder("spells")
      .where("LOWER(spells.name) = LOWER(:name)", { name })
      .getOne();
  }

  async updateSpellWithName(
    name: string,
    updatedSpell: SpellsDto
  ): Promise<void> {
    await this.spellRepository
      .createQueryBuilder()
      .update(SpellEntity)
      .set(updatedSpell)
      .where("name = :name", { name: name })
      .execute();
  }

  async createSpellWithName(newSpell: SpellsDto): Promise<void> {
    if (!newSpell.name || (await this.getSpellWithName(newSpell.name))) {
      throw new Error("Spell already exists with that name");
    }

    const newSpellEntity = this.spellMapper.spellDtoToEntity(newSpell);
    await this.spellRepository.save(newSpellEntity);
  }

  async deleteSpellWithName(name): Promise<void> {
    await this.spellRepository
      .createQueryBuilder()
      .delete()
      .where("name = :name", { name: name })
      .execute();
  }
}
