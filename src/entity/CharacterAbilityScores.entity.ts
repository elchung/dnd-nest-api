import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { CharacterData } from "./CharacterData.entity";

@Entity()
export class CharacterAbilityScores {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => CharacterData, (character) => character.abilityScores)
  @JoinColumn()
  character!: CharacterData;

  @Column({ nullable: true })
  strength?: number;

  @Column({ nullable: true })
  dexterity?: number;

  @Column({ nullable: true })
  constitution?: number;

  @Column({ nullable: true })
  intelligence?: number;

  @Column({ nullable: true })
  wisdom?: number;

  @Column({ nullable: true })
  charisma?: number;
}
