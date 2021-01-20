import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { EquipmentEntity } from "./Equipment.entity";

@Entity()
export class EquipmentArmorClassEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  base: number;

  @Column({ nullable: true })
  dexBonus: boolean;

  @Column({ nullable: true })
  maxBonus: number;

  @OneToOne((type) => EquipmentEntity, (equipment) => equipment.armorClass, {
    nullable: true,
  })
  @JoinColumn()
  parentEquipment: EquipmentEntity;
}
