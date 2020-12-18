import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {CharacterData} from "./CharacterData.entity";
import {CharacterSpellSlotsAtLevel} from "./CharacterSpellSlotsAtLevel.entity";

@Entity()
export class CharacterSpellSlots {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(type => CharacterData, character => character.spellSlots)
  @JoinColumn()
  character!: CharacterData;

  @OneToOne(type => CharacterSpellSlotsAtLevel)
  @JoinColumn()
  one!: CharacterSpellSlotsAtLevel;

  @OneToOne(type => CharacterSpellSlotsAtLevel)
  @JoinColumn()
  two!: CharacterSpellSlotsAtLevel;

  @OneToOne(type => CharacterSpellSlotsAtLevel)
  @JoinColumn()
  three!: CharacterSpellSlotsAtLevel;

  @OneToOne(type => CharacterSpellSlotsAtLevel)
  @JoinColumn()
  four!: CharacterSpellSlotsAtLevel;

  @OneToOne(type => CharacterSpellSlotsAtLevel)
  @JoinColumn()
  five!: CharacterSpellSlotsAtLevel;

  @OneToOne(type => CharacterSpellSlotsAtLevel)
  @JoinColumn()
  six!: CharacterSpellSlotsAtLevel;

  @OneToOne(type => CharacterSpellSlotsAtLevel)
  @JoinColumn()
  seven!: CharacterSpellSlotsAtLevel;

  @OneToOne(type => CharacterSpellSlotsAtLevel)
  @JoinColumn()
  eight!: CharacterSpellSlotsAtLevel;

  @OneToOne(type => CharacterSpellSlotsAtLevel)
  @JoinColumn()
  nine!: CharacterSpellSlotsAtLevel;
}
