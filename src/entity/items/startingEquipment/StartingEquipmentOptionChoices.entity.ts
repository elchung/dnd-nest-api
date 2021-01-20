import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { StartingEquipmentOptionsEntity } from "./StartingEquipmentOptions.entity";

@Entity()
export class StartingEquipmentOptionChoicesEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  equipment: string;

  @Column({ nullable: true })
  quantity: number;

  @ManyToOne(
    (type) => StartingEquipmentOptionsEntity,
    (startingEquipmentOptions) => startingEquipmentOptions.from,
    {
      nullable: true,
    }
  )
  @JoinColumn()
  parentOptions;
}
