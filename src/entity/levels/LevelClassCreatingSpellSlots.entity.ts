import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { LevelClassEntity } from "./LevelClass.entity";


@Entity()
export class LevelClassCreatingSpellSlotsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  sorcery_point_cost: number;

  @Column({ nullable: true })
  spell_slot_level: number;

  @ManyToOne((type) => LevelClassEntity, (levelClass) => levelClass.creatingSpellSlots)
  parentLevelClass: LevelClassEntity;
}
