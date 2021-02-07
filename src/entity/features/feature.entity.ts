import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToOne,
} from "typeorm";
import { OptionsEntity } from "../general/Options.entity";
import { PrerequisiteEntity } from "./prerequisite.entity";

@Entity()
export class FeatureEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  class?: string;

  @Column({ nullable: true })
  subclass?: string;

  @Column({ nullable: true })
  level?: number;

  @Column({ nullable: true })
  group?: string;

  @Column("text", { array: true, nullable: true })
  description?: string[];

  @OneToOne((type) => OptionsEntity, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  choice: OptionsEntity;

  @ManyToMany((type) => PrerequisiteEntity, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @JoinTable()
  prerequisites?: PrerequisiteEntity[];
}
