import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StartingEquipmentEntity } from "./StartingEquipment.entity";
@Entity()
export class StartingEquipmentEquipmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  equipment: string;

  @Column()
  quantity: number;

  @ManyToOne(
    (type) => StartingEquipmentEntity,
    (startingEquipment) => startingEquipment.startingEquipment
  )
  parent!: StartingEquipmentEntity;
}
