import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { SpellDamageEntity } from "./SpellDamage.entity";

@Entity()
export class SpellDamageAtLevelEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(
    (type) => SpellDamageEntity,
    (spellDamageEntity) => spellDamageEntity.atLevel
  )
  @JoinColumn()
  parentSpellDamage!: SpellDamageEntity;

  @Column()
  1!: string;

  @Column()
  2!: string;

  @Column()
  3!: string;

  @Column()
  4!: string;

  @Column()
  5!: string;

  @Column()
  6!: string;

  @Column()
  7!: string;

  @Column()
  8!: string;

  @Column()
  9!: string;
}
