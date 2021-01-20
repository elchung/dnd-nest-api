import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class LevelOptionsDiceEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  dice_count: number;

  @Column({ nullable: true })
  dice_value: number;
}
