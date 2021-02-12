import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CharacterDataEntity } from "./CharacterData.entity";
import { CharacterSpellSlotsAtLevelEntity } from "./CharacterSpellSlotsAtLevel.entity";

@Entity()
export class CharacterSpellSlotsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => CharacterDataEntity, (character) => character.spellSlots)
  @JoinColumn()
  character!: CharacterDataEntity;

  @OneToOne((type) => CharacterSpellSlotsAtLevelEntity, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  1!: CharacterSpellSlotsAtLevelEntity;

  @OneToOne((type) => CharacterSpellSlotsAtLevelEntity, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  2!: CharacterSpellSlotsAtLevelEntity;

  @OneToOne((type) => CharacterSpellSlotsAtLevelEntity, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  3!: CharacterSpellSlotsAtLevelEntity;

  @OneToOne((type) => CharacterSpellSlotsAtLevelEntity, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  4!: CharacterSpellSlotsAtLevelEntity;

  @OneToOne((type) => CharacterSpellSlotsAtLevelEntity, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  5!: CharacterSpellSlotsAtLevelEntity;

  @OneToOne((type) => CharacterSpellSlotsAtLevelEntity, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  6!: CharacterSpellSlotsAtLevelEntity;

  @OneToOne((type) => CharacterSpellSlotsAtLevelEntity, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  7!: CharacterSpellSlotsAtLevelEntity;

  @OneToOne((type) => CharacterSpellSlotsAtLevelEntity, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  8!: CharacterSpellSlotsAtLevelEntity;

  @OneToOne((type) => CharacterSpellSlotsAtLevelEntity, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  9!: CharacterSpellSlotsAtLevelEntity;
}
