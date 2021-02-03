import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { LevelClassEntity } from "./LevelClass.entity";

@Entity()
export class LevelSubclassEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  additionalMagicalSecretsMaxLvl: number;

  @Column({ nullable: true })
  auraRange: number;
}
