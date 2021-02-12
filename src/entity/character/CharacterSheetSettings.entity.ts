import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CharacterDataEntity } from "./CharacterData.entity";

@Entity()
export class CharacterSheetSettingsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  abilityScoreOnTop!: boolean;

  @OneToOne((type) => CharacterDataEntity, (character) => character.knownSpells)
  @JoinColumn()
  character!: CharacterDataEntity;
}
