import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LevelClassSpecificEntity } from "./LevelClassSpecific.entity";

@Entity()
export class LevelClassCreatingSpellSlotsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  sorceryPointCost: number;

  @Column({ nullable: true })
  spellSlotLevel: number;

  @ManyToOne(
    (type) => LevelClassSpecificEntity,
    (levelClass) => levelClass.creatingSpellSlots
  )
  parentLevelClass: LevelClassSpecificEntity;
}
