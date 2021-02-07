import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { EquipmentEntity } from "./Equipment.entity";

@Entity()
export class EquipmentContentsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  quantity: number;

  @Column({ nullable: true })
  items: string;
}
