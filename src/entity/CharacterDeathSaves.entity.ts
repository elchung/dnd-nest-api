import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { CharacterData } from "./CharacterData.entity";

@Entity()
export class CharacterDeathSaves {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => CharacterData, (character) => character.deathSaves)
  @JoinColumn()
  character!: CharacterData;

  @Column({ default: 0 })
  successes!: number;

  @Column({ default: 0 })
  failures!: number;
}
