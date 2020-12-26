import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { SpellDamageAtLevelEntity } from "./SpellDamageAtLevel.entity";
import { SpellsEntity } from "./Spells.entity";

@Entity()
export class SpellDamageEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => SpellsEntity, (spellsEntity) => spellsEntity.damage)
  @JoinColumn()
  parentSpell!: SpellsEntity;

  @Column()
  type!: string;

  @OneToOne(
    (type) => SpellDamageAtLevelEntity,
    (spellDamageAtLevelEntity) => spellDamageAtLevelEntity.parentSpellDamage,
    {
      cascade: true,
      eager: true,
      nullable: true,
    }
  )
  atLevel!: SpellDamageAtLevelEntity;
}
