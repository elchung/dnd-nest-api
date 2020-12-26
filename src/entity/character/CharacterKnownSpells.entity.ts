import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { CharacterDataEntity } from "./CharacterData.entity";

@Entity()
export class CharacterKnownSpellsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => CharacterDataEntity, (character) => character.knownSpells)
  @JoinColumn()
  character!: CharacterDataEntity;

  @Column("text", { array: true, nullable: true })
  0?: string[];

  @Column("text", { array: true, nullable: true })
  1?: string[];

  @Column("text", { array: true, nullable: true })
  2?: string[];

  @Column("text", { array: true, nullable: true })
  3?: string[];

  @Column("text", { array: true, nullable: true })
  4?: string[];

  @Column("text", { array: true, nullable: true })
  5?: string[];

  @Column("text", { array: true, nullable: true })
  6?: string[];

  @Column("text", { array: true, nullable: true })
  7?: string[];

  @Column("text", { array: true, nullable: true })
  8?: string[];

  @Column("text", { array: true, nullable: true })
  9?: string[];
}
