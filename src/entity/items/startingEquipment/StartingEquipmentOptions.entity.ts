import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { StartingEquipmentOptionChoicesEntity } from "./StartingEquipmentOptionChoices.entity";
import { StartingEquipmentEntity } from "./StartingEquipment.entity";

@Entity()
export class StartingEquipmentOptionsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  choose: number;

  @OneToMany(
    (type) => StartingEquipmentOptionChoicesEntity,
    (startingEquipmentOptionChoices) =>
      startingEquipmentOptionChoices.parentOptions,
    {
      eager: true,
      cascade: true,
      nullable: true,
    }
  )
  from: StartingEquipmentOptionChoicesEntity[];

  @Column({ nullable: true })
  type: string;

  @OneToOne(
    (type) => StartingEquipmentEntity,
    (startingEquipment) => startingEquipment.startingEquipmentOptions,
    {
      nullable: true,
    }
  )
  @JoinColumn()
  parentStartingEquipment;
}
