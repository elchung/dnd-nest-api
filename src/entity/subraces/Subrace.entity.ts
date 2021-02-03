import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { OptionsEntity } from "../general/Options.entity";
import { AbilityScoreBonusEntity } from "../general/AbilityScoreBonus.entity";

@Entity()
export class SubraceEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name: string;

  @Column()
  race: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany((type) => AbilityScoreBonusEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinTable()
  abilityScoreBonuses: AbilityScoreBonusEntity[];

  @Column("text", { array: true, nullable: true })
  startingProficiencies: string[];

  @Column("text", { array: true, nullable: true })
  languages: string[];

  @ManyToMany((type) => OptionsEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinTable()
  languageOptions: OptionsEntity[];

  @Column("text", { array: true, nullable: true })
  racialTraits: string[];

  @OneToOne((type) => OptionsEntity, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @JoinColumn()
  racialTraitOptions: OptionsEntity;
}
