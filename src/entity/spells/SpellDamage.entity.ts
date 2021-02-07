import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { SpellDamageAtLevelEntity } from "./SpellDamageAtLevel.entity";
import { SpellEntity } from "./Spell.entity";

@Entity()
export class SpellDamageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => SpellEntity, (spellsEntity) => spellsEntity.damage)
  parentSpell!: SpellEntity;

  @Column({ nullable: true })
  type?: string;

  @OneToOne(
    (type) => SpellDamageAtLevelEntity,
    (spellDamageAtLevelEntity) => spellDamageAtLevelEntity.parentSpellDamage,
    {
      cascade: true,
      eager: true,
      nullable: true,
    }
  )
  atLevel?: SpellDamageAtLevelEntity;
}
