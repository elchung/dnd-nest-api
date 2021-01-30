import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { SpellEntity } from "./Spell.entity";

@Entity()
export class SpellAreaOfEffectEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => SpellEntity, (spellEntity) => spellEntity.areaOfEffect)
  @JoinColumn()
  parentSpell!: SpellEntity;

  @Column()
  size!: number;

  @Column()
  type!: string;
}
