import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { LevelEntity } from "./Level.entity";

@Entity()
export class LevelSpellcastingEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  cantripsKnown: number;

  @Column({ nullable: true })
  spellSlotsLevel1: number;

  @Column({ nullable: true })
  spellSlotsLevel2: number;

  @Column({ nullable: true })
  spellSlotsLevel3: number;

  @Column({ nullable: true })
  spellSlotsLevel4: number;

  @Column({ nullable: true })
  spellSlotsLevel5: number;

  @Column({ nullable: true })
  spellSlotsLevel6: number;

  @Column({ nullable: true })
  spellSlotsLevel7: number;

  @Column({ nullable: true })
  spellSlotsLevel8: number;

  @Column({ nullable: true })
  spellSlotsLevel9: number;

  @Column({ nullable: true })
  spellsKnown: number;

  @OneToOne((type) => LevelEntity, (level) => level.spellcasting)
  parentLevel: LevelEntity;
}
