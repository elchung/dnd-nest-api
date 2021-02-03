import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class LevelSubclassEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  additionalMagicalSecretsMaxLvl: number;

  @Column({ nullable: true })
  auraRange: number;
}
