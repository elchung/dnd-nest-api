import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { CharacterData } from "./CharacterData.entity";
import { CharacterSpellSlotsAtLevel } from "./CharacterSpellSlotsAtLevel.entity";

@Entity()
export class CharacterSpellSlots {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => CharacterData, (character) => character.spellSlots)
  @JoinColumn()
  character!: CharacterData;

  @OneToOne((type) => CharacterSpellSlotsAtLevel, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  one!: CharacterSpellSlotsAtLevel;

  @OneToOne((type) => CharacterSpellSlotsAtLevel, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  two!: CharacterSpellSlotsAtLevel;

  @OneToOne((type) => CharacterSpellSlotsAtLevel, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  three!: CharacterSpellSlotsAtLevel;

  @OneToOne((type) => CharacterSpellSlotsAtLevel, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  four!: CharacterSpellSlotsAtLevel;

  @OneToOne((type) => CharacterSpellSlotsAtLevel, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  five!: CharacterSpellSlotsAtLevel;

  @OneToOne((type) => CharacterSpellSlotsAtLevel, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  six!: CharacterSpellSlotsAtLevel;

  @OneToOne((type) => CharacterSpellSlotsAtLevel, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  seven!: CharacterSpellSlotsAtLevel;

  @OneToOne((type) => CharacterSpellSlotsAtLevel, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  eight!: CharacterSpellSlotsAtLevel;

  @OneToOne((type) => CharacterSpellSlotsAtLevel, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  nine!: CharacterSpellSlotsAtLevel;
}
