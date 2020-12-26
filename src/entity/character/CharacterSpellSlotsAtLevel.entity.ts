import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { CharacterSpellSlotsEntity } from "./CharacterSpellSlots.entity";

@Entity()
export class CharacterSpellSlotsAtLevelEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => CharacterSpellSlotsEntity)
  characterSpellSlots!: CharacterSpellSlotsEntity;

  @Column({ default: 0 })
  max!: number;

  @Column({ default: 0 })
  used!: number;
}
