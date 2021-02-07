import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { EquipmentEntity } from "./Equipment.entity";

@Entity()
export class EquipmentRangeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  long: number;

  @Column({ nullable: true })
  normal: number;

  @OneToOne((type) => EquipmentEntity, {
    nullable: true,
  })
  parentEquipment: EquipmentEntity;
}
