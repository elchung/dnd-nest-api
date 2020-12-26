import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { CharacterTreasureEntity } from "./CharacterTreasure.entity";

@Entity()
export class CharacterTreasureMoneyEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: 0 })
  gold!: number;

  @Column({ default: 0 })
  silver!: number;

  @Column({ default: 0 })
  electrum!: number;

  @Column({ default: 0 })
  copper!: number;

  @OneToOne(
    (type) => CharacterTreasureEntity,
    (parentTreasure) => parentTreasure.money
  )
  @JoinColumn()
  parentTreasure!: CharacterTreasureEntity;
}
