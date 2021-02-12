import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CharacterHitDiceEntity } from "./CharacterHitDice.entity";
import { CharacterSheetSettingsEntity } from "./CharacterSheetSettings.entity";
import { CharacterAbilityScoresEntity } from "./CharacterAbilityScores.entity";
import { CharacterDeathSavesEntity } from "./CharacterDeathSaves.entity";
import { CharacterKnownSpellsEntity } from "./CharacterKnownSpells.entity";
import { CharacterSpellSlotsEntity } from "./CharacterSpellSlots.entity";
import { CharacterFeaturesAndTraitsEntity } from "./CharacterFeaturesAndTraits.entity";
import { CharacterTreasureEntity } from "./CharacterTreasure.entity";

@Entity()
export class CharacterDataEntity {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column({ default: 0 })
  experience?: number;

  @Column({ default: 0 })
  proficiencyBonus?: number;

  @Column({ default: 0 })
  inspiration?: number;

  @Column({ nullable: true })
  armorClass?: number;

  @Column({ nullable: true, default: 0 })
  initiative?: number;

  @Column({ nullable: true })
  speed?: number;

  @Column({ nullable: true })
  maxHp?: number;

  @Column({ nullable: true, default: 0 })
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

  @OneToMany((type) => CharacterHitDiceEntity, (hitDice) => hitDice.character, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  hitDice?: CharacterHitDiceEntity[];

  @OneToOne(
    (type) => CharacterAbilityScoresEntity,
    (abilityScores) => abilityScores.character,
    { cascade: true, eager: true }
  )
  abilityScores!: CharacterAbilityScoresEntity;

  @OneToOne(
    (type) => CharacterDeathSavesEntity,
    (deathSaves) => deathSaves.character,
    { cascade: true, eager: true }
  )
  deathSaves!: CharacterDeathSavesEntity;

  @OneToOne(
    (type) => CharacterKnownSpellsEntity,
    (knownSpells) => knownSpells.character,
    { cascade: true, eager: true }
  )
  knownSpells!: CharacterKnownSpellsEntity;

  @OneToOne(
    (type) => CharacterSpellSlotsEntity,
    (spellSlots) => spellSlots.character,
    { cascade: true, eager: true }
  )
  spellSlots!: CharacterSpellSlotsEntity;

  @OneToMany(
    (type) => CharacterFeaturesAndTraitsEntity,
    (featuresAndTraits) => featuresAndTraits.character,
    { cascade: true, eager: true, nullable: true }
  )
  featuresAndTraits?: CharacterFeaturesAndTraitsEntity[];

  @OneToOne(
    (type) => CharacterTreasureEntity,
    (treasure) => treasure.character,
    {
      cascade: true,
      eager: true,
    }
  )
  treasure!: CharacterTreasureEntity;

  @OneToOne(
    (type) => CharacterSheetSettingsEntity,
    (settings) => settings.character,
    { cascade: true, eager: true }
  )
  settings!: CharacterSheetSettingsEntity;
}
