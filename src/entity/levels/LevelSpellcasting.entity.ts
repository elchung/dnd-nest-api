import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
} from "typeorm";
import { LevelEntity } from "./Level.entity";

@Entity()
export class LevelSpellcastingEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column({ nullable: true })
  cantrips_known: number;
  
  @Column({ nullable: true })
  spell_slots_level_1: number;
  
  @Column({ nullable: true })
  spell_slots_level_2: number;
  
  @Column({ nullable: true })
  spell_slots_level_3: number;
  
  @Column({ nullable: true })
  spell_slots_level_4: number;
  
  @Column({ nullable: true })
  spell_slots_level_5: number;
  
  @Column({ nullable: true })
  spell_slots_level_6: number;
  
  @Column({ nullable: true })
  spell_slots_level_7: number;
  
  @Column({ nullable: true })
  spell_slots_level_8: number;
  
  @Column({ nullable: true })
  spell_slots_level_9: number;
  
  @Column({ nullable: true })
  spells_known: number;

  @OneToOne(type => LevelEntity, level => level.spellcasting)
  parentLevel: LevelEntity;
}