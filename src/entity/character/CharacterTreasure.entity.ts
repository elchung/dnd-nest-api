import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { CharacterTreasureMoneyEntity } from "./CharacterTreasureMoney.entity";
import { CharacterTreasureItemEntity } from "./CharacterTreasureItem.entity";
import { CharacterDataEntity } from "./CharacterData.entity";

@Entity()
export class CharacterTreasureEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => CharacterDataEntity, (character) => character.treasure)
  @JoinColumn()
  character!: CharacterDataEntity;

  @OneToOne(
    (type) => CharacterTreasureMoneyEntity,
    (money) => money.parentTreasure,
    {
      cascade: true,
      eager: true,
    }
  )
  money!: CharacterTreasureMoneyEntity;

  @OneToMany(
    (type) => CharacterTreasureItemEntity,
    (items) => items.parentTreasure,
    {
      nullable: true,
    }
  )
  items?: CharacterTreasureItemEntity[];
}
