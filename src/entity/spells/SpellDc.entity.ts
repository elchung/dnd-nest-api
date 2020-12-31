import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { SpellsEntity } from "./Spells.entity";

@Entity()
export class SpellDcEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => SpellsEntity, (spellEntity) => spellEntity.dc)
  @JoinColumn()
  parentSpell!: SpellsEntity;

  @Column({ nullable: true })
  dc_success?: string;

  @Column({ nullable: true })
  dc_type?: string;
}
