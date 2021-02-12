import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EquipmentEntity } from "./Equipment.entity";

@Entity()
export class EquipmentContentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  quantity: number;

  @Column({ nullable: true })
  items: string;
}
