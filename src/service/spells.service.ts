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
    private spellDamageAtLevelReposiotry: Repository<SpellDamageAtLevelEntity>
  ) {}

  private spellMapper = new SpellsMapper();

  async getAllSpells(): Promise<SpellsDto[]> {
    return await this.spellsRepository.find(); //todo how to find all?
  }

  async getSpells(spellNames: string[]): Promise<SpellsDto[]> {
    const whereOptions = spellNames.map((spellName) => ({ name: spellName }));
    return await this.spellsRepository.find({ where: whereOptions });
  }

  async getSpellWithName(name: string): Promise<SpellsDto> {
    return await this.spellsRepository.findOne({
      where: { name: name },
    });
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

  async createSpellWithName(name: string, newSpell: SpellsDto): Promise<void> {
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
