import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { LevelEntity } from "./Level.entity";

@Entity()
export class LevelSubclassEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  additionalMagicalSecretsMaxLvl: number;

  @Column({ nullable: true })
  auraRange: number;
}
