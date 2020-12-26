import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { CharacterDataEntity } from "./CharacterData.entity";

@Entity()
export class CharacterFeaturesAndTraitsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(
    (type) => CharacterDataEntity,
    (character) => character.featuresAndTraits
  )
  @JoinColumn()
  character!: CharacterDataEntity;

  @Column()
  index!: number;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: true })
  body?: string;
}
