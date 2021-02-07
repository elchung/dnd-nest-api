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
  id: number;

  @OneToOne(
    (type) => SpellDamageEntity,
    (spellDamageEntity) => spellDamageEntity.atLevel
  )
  @JoinColumn()
  parentSpellDamage!: SpellDamageEntity;

  @Column({ nullable: true })
  1?: string;

  @Column({ nullable: true })
  2?: string;

  @Column({ nullable: true })
  3?: string;

  @Column({ nullable: true })
  4?: string;

  @Column({ nullable: true })
  5?: string;

  @Column({ nullable: true })
  6?: string;

  @Column({ nullable: true })
  7?: string;

  @Column({ nullable: true })
  8?: string;

  @Column({ nullable: true })
  9?: string;
}
