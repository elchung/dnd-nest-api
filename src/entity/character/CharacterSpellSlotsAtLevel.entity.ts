import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CharacterSpellSlotsEntity } from "./CharacterSpellSlots.entity";

@Entity()
export class CharacterSpellSlotsAtLevelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => CharacterSpellSlotsEntity)
  characterSpellSlots!: CharacterSpellSlotsEntity;

  @Column({ default: 0 })
  max!: number;

  @Column({ default: 0 })
  used!: number;
}
