import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { LevelClassEntity } from "./LevelClass.entity";

@Entity()
export class LevelClassCreatingSpellSlotsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  sorceryPointCost: number;

  @Column({ nullable: true })
  spellSlotLevel: number;

  @ManyToOne(
    (type) => LevelClassEntity,
    (levelClass) => levelClass.creatingSpellSlots
  )
  parentLevelClass: LevelClassEntity;
}
