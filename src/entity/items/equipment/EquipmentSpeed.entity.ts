import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EquipmentEntity } from "./Equipment.entity";

@Entity()
export class EquipmentSpeedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  quantity: number;

  @Column({ nullable: true })
  unit: string;

  @OneToOne((type) => EquipmentEntity, (equipment) => equipment.speed, {
    nullable: true,
  })
  @JoinColumn()
  parentEquipment: EquipmentEntity;
}
