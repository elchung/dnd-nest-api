import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { SpellsEntity } from "./Spells.entity";

@Entity()
export class SpellAreaOfEffectEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => SpellsEntity, (spellEntity) => spellEntity.areaOfEffect)
  @JoinColumn()
  parentSpell!: SpellsEntity;

  @Column()
  size!: number;

  @Column()
  type!: string;
}
