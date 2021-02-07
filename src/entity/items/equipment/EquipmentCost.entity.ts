import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { EquipmentEntity } from "./Equipment.entity";

@Entity()
export class EquipmentCostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  quantity: number;

  @Column({ nullable: true })
  unit: string;

  @OneToOne((type) => EquipmentEntity, (equipment) => equipment.cost, {
    nullable: true,
  })
  @JoinColumn()
  parentEquipment: EquipmentEntity;
}
