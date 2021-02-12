import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SpellEntity } from "./Spell.entity";

@Entity()
export class SpellAreaOfEffectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => SpellEntity, (spellEntity) => spellEntity.areaOfEffect)
  parentSpell!: SpellEntity;

  @Column()
  size!: number;

  @Column()
  type!: string;
}
