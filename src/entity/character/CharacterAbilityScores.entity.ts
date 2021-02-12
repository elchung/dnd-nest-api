import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CharacterDataEntity } from "./CharacterData.entity";

@Entity()
export class CharacterAbilityScoresEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(
    (type) => CharacterDataEntity,
    (character) => character.abilityScores
  )
  @JoinColumn()
  character!: CharacterDataEntity;

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
