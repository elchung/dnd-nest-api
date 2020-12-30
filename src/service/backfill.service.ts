import axios from "axios";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SpellsEntity } from "../entity/spells/Spells.entity";
import { SpellDamageEntity } from "../entity/spells/SpellDamage.entity";
import { SpellDamageAtLevelEntity } from "../entity/spells/SpellDamageAtLevel.entity";
import { SpellDcEntity } from "../entity/spells/SpellDc.entity";
import { SpellAreaOfEffectEntity } from "../entity/spells/SpellAreaOfEffect.entity";

@Injectable()
export class BackfillService {
  constructor(
    @InjectRepository(SpellsEntity)
    private spellsRepository: Repository<SpellsEntity>
  ) {}

  private apiUrlBase = "http://www.dnd5eapi.co/";

  async backfillSpells(): Promise<void> {
    console.log("Getting spell list...");
    const spellList = (await axios.get(this.apiUrlBase + "api/spells/")).data
      .results;
    console.log(`${spellList.length} spells found`);

    let count = 1;
    for (const spellIndex of spellList) {
      // using 'for..of..' for async compatibility
      console.log(
        `${count} of ${spellList.length}: Getting data for ${spellIndex.name}`
      );
      const spell = (await axios.get(this.apiUrlBase + spellIndex.url)).data;

      console.log("retrieved...");
      const spellEntity = new SpellsEntity();
      spellEntity.castingTime = spell.casting_time;
      spellEntity.classes = spell.classes.map((classObj) => classObj.name);
      spellEntity.components = spell.components;
      spellEntity.concentration = spell.concentration;
      spellEntity.duration = spell.duration;
      spellEntity.higherLevel = spell.higher_level;
      spellEntity.description = spell.desc;
      spellEntity.name = spell.name;
      spellEntity.range = spell.range;
      spellEntity.materials = spell.material;
      spellEntity.ritual = spell.ritual;
      spellEntity.level = spell.level;
      spellEntity.attackType = spell.attack_type;
      spellEntity.school = spell.school.name;

      if (spell.damage != null) {
        const spellDamageAtLevel = new SpellDamageAtLevelEntity();
        const spellDamageEntity = new SpellDamageEntity();
        spellDamageAtLevel["1"] = spell.damage.damage_at_slot_level?.["1"];
        spellDamageAtLevel["2"] = spell.damage.damage_at_slot_level?.["2"];
        spellDamageAtLevel["3"] = spell.damage.damage_at_slot_level?.["3"];
        spellDamageAtLevel["4"] = spell.damage.damage_at_slot_level?.["4"];
        spellDamageAtLevel["5"] = spell.damage.damage_at_slot_level?.["5"];
        spellDamageAtLevel["6"] = spell.damage.damage_at_slot_level?.["6"];
        spellDamageAtLevel["7"] = spell.damage.damage_at_slot_level?.["7"];
        spellDamageAtLevel["8"] = spell.damage.damage_at_slot_level?.["8"];
        spellDamageAtLevel["9"] = spell.damage.damage_at_slot_level?.["9"];
        spellDamageAtLevel.parentSpellDamage = spellDamageEntity;
        spellDamageEntity.type = spell.damage.damage_type.name;
        spellDamageEntity.atLevel = spellDamageAtLevel;
        spellDamageEntity.parentSpell = spellEntity;
        spellEntity.damage = spellDamageEntity;
      }

      if (spell.dc != null) {
        const spellDcEntity = new SpellDcEntity();
        spellDcEntity.dc_success = spell.dc.dc_success;
        spellDcEntity.dc_type = spell.dc.dc_type.name;
        spellEntity.dc = spellDcEntity;
        spellDcEntity.parentSpell = spellEntity;
      }

      if (spell.area_of_effect != null) {
        const spellAreaOfEffectEntity = new SpellAreaOfEffectEntity();
        spellAreaOfEffectEntity.size = spell.area_of_effect.size;
        spellAreaOfEffectEntity.type = spell.area_of_effect.type;
        spellEntity.areaOfEffect = spellAreaOfEffectEntity;
        spellAreaOfEffectEntity.parentSpell = spellEntity;
      }

      console.log("saving spell...");
      await this.spellsRepository.save(spellEntity);
      count++;
    }
    console.log("done");
  }
}
