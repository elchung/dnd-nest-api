import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, OneToMany} from "typeorm";
import {CharacterHitDice} from "./CharacterHitDice.entity";
import {CharacterSheetSettings} from "./CharacterSheetSettings.entity";
import {CharacterAbilityScores} from "./CharacterAbilityScores.entity";
import {CharacterDeathSaves} from "./CharacterDeathSaves.entity";
import {CharacterKnownSpells} from "./CharacterKnownSpells.entity";
import {CharacterSpellSlots} from "./CharacterSpellSlots.entity";
import {CharacterFeaturesAndTraits} from "./CharacterFeaturesAndTraits.entity";
import {CharacterTreasure} from "./CharacterTreasure.entity";

@Entity()
export class CharacterData {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column({ nullable: true })
  characterName?: string;

  @Column({ nullable: true })
  level?: number;

  @Column({ nullable: true })
  class?: string;

  @Column({ nullable: true })
  background?: string;

  @Column({ nullable: true })
  race?: string;

  @Column({ nullable: true })
  spellcastingAbility?: string;

  @Column({ nullable: true })
  experience?: number;

  @Column({ nullable: true })
  proficiencyBonus?: number;

  @Column({ nullable: true })
  inspiration?: number;

  @Column({ nullable: true })
  armorClass?: number;

  @Column({ nullable: true })
  initiative?: number;

  @Column({ nullable: true })
  speed?: number;

  @Column({ nullable: true })
  maxHp?: number;

  @Column({ nullable: true })
  tempHp?: number;

  @Column({ nullable: true })
  currentHp?: number;

  @Column("int", { array: true, nullable: true })
  hpHistory?: number[];

  @Column("text", { array: true, nullable: true })
  skillProficiencies?: string[];

  @Column("text", { array: true, nullable: true })
  savingThrowProficiencies?: string[];

  @Column("text", { array: true, nullable: true })
  skillExpertise?: string[];

  @Column("text", { array: true, nullable: true })
  generalProficiencies?: string[];

  @Column("text", { array: true, nullable: true })
  knownLanguages?: string[];

  @Column("text", { array: true, nullable: true })
  toolAndOtherProficiencies?: string[];

  @Column("text", { array: true, nullable: true })
  preparedSpells?: string[];

  @OneToMany(type => CharacterHitDice, hitDice => hitDice.character, { cascade: true, eager: true, nullable: true })
  hitDice?: CharacterHitDice[];

  @OneToOne(type => CharacterAbilityScores, abilityScores => abilityScores.character, { cascade: true, eager: true })
  abilityScores!: CharacterAbilityScores;

  @OneToOne(type => CharacterDeathSaves, deathSaves => deathSaves.character, { cascade: true, eager: true })
  deathSaves!: CharacterDeathSaves;

  @OneToOne(type => CharacterKnownSpells, knownSpells => knownSpells.character, { cascade: true, eager: true })
  knownSpells!: CharacterKnownSpells;

  @OneToOne(type => CharacterSpellSlots, spellSlots => spellSlots.character, { cascade: true, eager: true })
  spellSlots!: CharacterSpellSlots

  @OneToMany(type => CharacterFeaturesAndTraits, featuresAndTraits => featuresAndTraits.character, { cascade: true, eager: true, nullable: true })
  featuresAndTraits?: CharacterFeaturesAndTraits[];

  @OneToOne(type => CharacterTreasure, treasure => treasure.character, { cascade: true, eager: true })
  treasure!: CharacterTreasure;

  @OneToOne(type => CharacterSheetSettings, settings => settings.character, { cascade: true, eager: true })
  settings!: CharacterSheetSettings;
}