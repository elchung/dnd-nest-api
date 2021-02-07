import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { EquipmentDamageEntity } from "./EquipmentDamage.entity";
import { EquipmentCostEntity } from "./EquipmentCost.entity";
import { EquipmentContentsEntity } from "./EquipmentContents.entity";
import { EquipmentArmorClassEntity } from "./EquipmentArmorClass.entity";
import { EquipmentRangeEntity } from "./EquipmentRange.entity";
import { EquipmentSpeedEntity } from "./EquipmentSpeed.entity";

@Entity()
export class EquipmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  armorCategory: string;

  @OneToOne((type) => EquipmentArmorClassEntity, (ac) => ac.parentEquipment, {
    eager: true,
    cascade: true,
    nullable: true,
  })
  armorClass: EquipmentArmorClassEntity;

  @Column({ nullable: true })
  capacity: string;

  @Column({ nullable: true })
  categoryRange: string;

  @OneToOne((type) => EquipmentContentsEntity, {
    eager: true,
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  contents: EquipmentContentsEntity;

  @OneToOne((type) => EquipmentCostEntity, (cost) => cost.parentEquipment, {
    eager: true,
    cascade: true,
    nullable: true,
  })
  cost: EquipmentCostEntity;

  @OneToOne((type) => EquipmentDamageEntity, {
    eager: true,
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  damage: EquipmentDamageEntity;

  @Column("text", { array: true, nullable: true })
  description: string[];

  @Column({ nullable: true })
  equipmentCategory: string;

  @Column({ nullable: true })
  gearCategory: string;

  @Column({ nullable: true })
  name: string;

  @Column("text", { array: true, nullable: true })
  properties: string[];

  @Column({ nullable: true })
  quantity: number;

  @OneToOne((type) => EquipmentRangeEntity, (range) => range.parentEquipment, {
    eager: true,
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  range: EquipmentRangeEntity;

  @Column("text", { array: true, nullable: true })
  special: string[];

  @OneToOne((type) => EquipmentSpeedEntity, (speed) => speed.parentEquipment, {
    eager: true,
    cascade: true,
    nullable: true,
  })
  speed: EquipmentSpeedEntity;

  @Column({ nullable: true })
  stealthDisadvantage: boolean;

  @Column({ nullable: true })
  strMinimum: number;

  @OneToOne((type) => EquipmentRangeEntity, (range) => range.parentEquipment, {
    eager: true,
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  throwRange: EquipmentRangeEntity;

  @Column({ nullable: true })
  toolCategory: string;

  @OneToOne((type) => EquipmentDamageEntity, {
    eager: true,
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  twoHandedDamage: EquipmentDamageEntity;

  @Column({ nullable: true })
  vehicleCategory: string;

  @Column({ nullable: true })
  weaponCategory: string;

  @Column({ nullable: true })
  weaponRange: string;

  @Column({ nullable: true })
  weight: number;
}
