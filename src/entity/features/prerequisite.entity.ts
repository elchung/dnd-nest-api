import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { FeatureEntity } from "./feature.entity";

@Entity()
export class PrerequisiteEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  type?: string;

  @ManyToOne((type) => FeatureEntity, (feature) => feature.prerequisites)
  parentFeature: FeatureEntity;
}
