import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { CharacterTreasureMoney } from "./CharacterTreasureMoney.entity";
import { CharacterTreasureItem } from "./CharacterTreasureItem.entity";
import { CharacterData } from "./CharacterData.entity";

@Entity()
export class CharacterTreasure {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => CharacterData, (character) => character.treasure)
  @JoinColumn()
  character!: CharacterData;

  @OneToOne((type) => CharacterTreasureMoney, (money) => money.parentTreasure, {
    cascade: true,
    eager: true,
  })
  money!: CharacterTreasureMoney;

  @OneToMany((type) => CharacterTreasureItem, (items) => items.parentTreasure, {
    nullable: true,
  })
  items?: CharacterTreasureItem[];
}
