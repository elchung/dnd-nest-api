import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne
} from "typeorm";
import { LevelClassEntity } from "./LevelClass.entity";


@Entity()
export class LevelOptionsDiceEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column({ nullable: true })
  dice_count: number;

  @Column({ nullable: true })
  dice_value: number;
}