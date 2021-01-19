import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToOne,
} from "typeorm";
import { InfoEntity } from "../Info.entity";

@Entity()
export class ClassSpellcastingEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  level?: number;

  @Column({ nullable: true })
  spellcasting_ability?: string;

  @OneToOne((type) => InfoEntity, {
    cascade: true,
  })
  @JoinTable()
  info?: InfoEntity[];
}