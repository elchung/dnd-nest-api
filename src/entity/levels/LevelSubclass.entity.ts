import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { LevelEntity } from "./Level.entity";

@Entity()
export class LevelSubclassEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  additional_magical_secrets_max_lvl: number;

  @Column({ nullable: true })
  aura_range: number;

  @OneToOne((type) => LevelEntity, (level) => level.subclassSpecific)
  parentLevel: LevelEntity;
}
