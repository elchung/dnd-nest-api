import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { CharacterTreasure } from "./CharacterTreasure.entity";

@Entity()
export class CharacterTreasureMoney {
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
    (type) => CharacterTreasure,
    (parentTreasure) => parentTreasure.money
  )
  @JoinColumn()
  parentTreasure!: CharacterTreasure;
}
