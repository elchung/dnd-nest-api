import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CharacterDataEntity } from "./CharacterData.entity";

@Entity()
export class CharacterDeathSavesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => CharacterDataEntity, (character) => character.deathSaves)
  @JoinColumn()
  character!: CharacterDataEntity;

  @Column({ default: 0 })
  successes!: number;

  @Column({ default: 0 })
  failures!: number;
}
