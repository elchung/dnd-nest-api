import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SpellEntity } from "./Spell.entity";

@Entity()
export class SpellDcEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => SpellEntity, (spellEntity) => spellEntity.dc)
  parentSpell!: SpellEntity;

  @Column({ nullable: true })
  dcSuccess?: string;

  @Column({ nullable: true })
  dcType?: string;
}
