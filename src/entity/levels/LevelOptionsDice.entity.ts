import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class LevelOptionsDiceEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  diceCount: number;

  @Column({ nullable: true })
  diceValue: number;
}
