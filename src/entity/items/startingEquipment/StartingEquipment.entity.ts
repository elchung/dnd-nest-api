import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { StartingEquipmentEquipmentEntity } from "./StartingEquipmentEquipment.entity";
import { StartingEquipmentOptionsEntity } from "./StartingEquipmentOptions.entity";

@Entity()
export class StartingEquipmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  class: string;

  @OneToMany(
    (type) => StartingEquipmentEquipmentEntity,
    (startingEquipment) => startingEquipment.parent,
    {
      nullable: true,
      cascade: true,
      eager: true,
    }
  )
  @JoinColumn()
  startingEquipment: StartingEquipmentEquipmentEntity[];

  @OneToOne(
    (type) => StartingEquipmentOptionsEntity,
    (startingEquipmentOptions) =>
      startingEquipmentOptions.parentStartingEquipment,
    {
      eager: true,
      cascade: true,
      nullable: true,
    }
  )
  startingEquipmentOptions: StartingEquipmentOptionsEntity;
}
