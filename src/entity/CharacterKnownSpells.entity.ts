import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from "typeorm";
import {CharacterData} from "./CharacterData.entity";

@Entity()
export class CharacterKnownSpells {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(type => CharacterData, character => character.knownSpells)
  @JoinColumn()
  character!: CharacterData;

  @Column("text", { array: true, nullable: true })
  zero?: string[];

  @Column("text", { array: true, nullable: true })
  one?: string[];

  @Column("text", { array: true, nullable: true })
  two?: string[];

  @Column("text", { array: true, nullable: true })
  three?: string[];

  @Column("text", { array: true, nullable: true })
  four?: string[];

  @Column("text", { array: true, nullable: true })
  five?: string[];

  @Column("text", { array: true, nullable: true })
  six?: string[];

  @Column("text", { array: true, nullable: true })
  seven?: string[];

  @Column("text", { array: true, nullable: true })
  eight?: string[];

  @Column("text", { array: true, nullable: true })
  nine?: string[];
}
