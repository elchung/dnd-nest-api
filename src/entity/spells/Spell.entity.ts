import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { SpellDamageEntity } from "./SpellDamage.entity";
import { SpellAreaOfEffectEntity } from "./SpellAreaOfEffect.entity";
import { SpellDcEntity } from "./SpellDc.entity";

@Entity()
export class SpellEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(
    (type) => SpellAreaOfEffectEntity,
    (spellAreaOfEffect) => spellAreaOfEffect.parentSpell,
    {
      cascade: true,
      eager: true,
      nullable: true,
    }
  )
  areaOfEffect?: SpellAreaOfEffectEntity;

  @Column()
  castingTime!: string;

  @Column("text", { array: true })
  classes!: string[];

  @Column({ nullable: true })
  components?: string;

  @Column()
  concentration!: boolean;

  @OneToOne(
    (type) => SpellDamageEntity,
    (spellDamageEntity) => spellDamageEntity.parentSpell,
    {
      cascade: true,
      eager: true,
      nullable: true,
    }
  )
  damage?: SpellDamageEntity;

  @Column()
  duration!: string;

  @OneToOne(
    (type) => SpellDcEntity,
    (spellDcEntity) => spellDcEntity.parentSpell,
    {
      cascade: true,
      eager: true,
      nullable: true,
    }
  )
  dc: SpellDcEntity;

  @Column("text", { array: true, nullable: true })
  higherLevel!: string[];

  @Column("text", { array: true, nullable: true })
  description!: string[];

  @Column({ unique: true })
  name!: string;

  @Column()
  range!: string;

  @Column({ nullable: true })
  materials?: string;

  @Column()
  ritual!: boolean;

  @Column()
  level!: number;

  @Column({ nullable: true })
  attackType!: string;

  @Column()
  school!: string;
}
