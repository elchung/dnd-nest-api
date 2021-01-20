import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { StartingEquipmentOptionsEntity } from "./StartingEquipmentOptions.entity";

@Entity()
export class StartingEquipmentEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  class: string;

  @Column("text", { array: true, nullable: true })
  startingEquipment: string[];

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
