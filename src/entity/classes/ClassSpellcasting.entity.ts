import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { InfoEntity } from "../general/Info.entity";

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
  @JoinColumn()
  info?: InfoEntity[];
}
