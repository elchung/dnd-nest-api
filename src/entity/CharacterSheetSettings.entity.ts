import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from "typeorm";
import {CharacterData} from "./CharacterData.entity";

@Entity()
export class CharacterSettings {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  abilityScoreOnTop!: boolean;

  @OneToOne(type => CharacterData, character => character.knownSpells)
  @JoinColumn()
  character!: CharacterData;
}