import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { PrerequisiteEntity } from "./prerequisite.entity";

@Entity()
export class FeatureEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
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

  @OneToMany(
    (type) => PrerequisiteEntity,
    (prerequisite) => prerequisite.parentFeature,
    {
      cascade: true,
      eager: true,
      nullable: true,
    }
  )
  prerequisites?: PrerequisiteEntity[];
}
