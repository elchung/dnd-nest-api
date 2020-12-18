import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {CharacterSpellSlots} from "./CharacterSpellSlots.entity";

@Entity()
export class CharacterSpellSlotsAtLevel {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(type => CharacterSpellSlots)
  characterSpellSlots!: CharacterSpellSlots;

  @Column()
  max!: number;

  @Column()
  used!: number;
}
