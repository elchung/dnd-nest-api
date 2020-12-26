import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { SpellDamageEntity } from "./SpellDamage.entity";

@Entity()
export class SpellsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(
    (type) => SpellDamageEntity,
    (spellDamageEntity) => spellDamageEntity.parentSpell,
    {
      cascade: true,
      eager: true,
      nullable: true,
    }
  )
  damage!: SpellDamageEntity;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  higherLevel!: string;

  @Column()
  range!: string;

  @Column()
  components!: string;

  @Column()
  materials!: string;

  @Column()
  ritual!: boolean;

  @Column()
  duration!: string;

  @Column()
  concentration!: boolean;

  @Column()
  castingTime!: string;

  @Column()
  level!: number;

  @Column()
  attackType!: string;

  @Column()
  school!: string;

  @Column("text", { array: true })
  classes!: string[];
}
