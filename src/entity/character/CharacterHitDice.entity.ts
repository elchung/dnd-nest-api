import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { CharacterDataEntity } from "./CharacterData.entity";

@Entity()
export class CharacterHitDiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => CharacterDataEntity, (character) => character.hitDice)
  @JoinColumn()
  character!: CharacterDataEntity;

  @Column()
  numDice!: number;

  @Column()
  diceType!: number;

  @Column()
  numUsed!: number;
}
