import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  OneToOne,
} from "typeorm";
import { LevelEntity } from "./Level.entity";
import { LevelClassCreatingSpellSlotsEntity } from "./LevelClassCreatingSpellSlots.entity";
import { LevelOptionsDiceEntity } from "./LevelOptionsDice.entity";


@Entity()
export class LevelClassEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column({ nullable: true })
  actionSurges: number;
  
  @Column({ nullable: true })
  arcaneRecoveryLevels: number;
  
  @Column({ nullable: true })
  auraRange: number;
  
  @Column({ nullable: true })
  bardicInspirationDie: number;
  
  @Column({ nullable: true })
  brutalCriticalDice: number;
  
  @Column({ nullable: true })
  channelDivinityCharges: number;

  @OneToMany(
    (type) => LevelClassCreatingSpellSlotsEntity,
    (levelClass) => levelClass.parentLevelClass,
    {
      cascade: true,
      eager: true,
      nullable: true,
    }
  )
  creatingSpellSlots: LevelClassCreatingSpellSlotsEntity[]
  
  @Column({ nullable: true })
  destroyUndeadCr: number;
  
  @Column({ nullable: true })
  extraAttacks: number;
  
  @Column({ nullable: true })
  favoredEnemies: number;
  
  @Column({ nullable: true })
  favoredTerrain: number;

  @Column({ nullable: true })
  indomitableUses: number;
  
  @Column({ nullable: true })
  invocationsKnown: number;
  
  @Column({ nullable: true })
  kiPoints: number;
  
  @Column({ nullable: true })
  magicalSecretsMax5: number;
  
  @Column({ nullable: true })
  magicalSecretsMax7: number;
  
  @Column({ nullable: true })
  magicalSecretsMax9: number;

  @OneToOne((type) => LevelOptionsDiceEntity, 
  {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @JoinTable()
  martialArts: LevelOptionsDiceEntity;
  
  @Column({ nullable: true })
  metamagicKnown: number;
  
  @Column({ nullable: true })
  mysticArcanumLevel6: number;
  
  @Column({ nullable: true })
  mysticArcanumLevel7: number;
  
  @Column({ nullable: true })
  mysticArcanumLevel8: number;
  
  @Column({ nullable: true })
  mysticArcanumLevel9: number;
  
  @Column({ nullable: true })
  rageCount: number;
  
  @Column({ nullable: true })
  rageDamageBonus: number;

  @OneToOne((type) => LevelOptionsDiceEntity, 
  {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @JoinTable()
  sneakAttack: LevelOptionsDiceEntity;
  
  @Column({ nullable: true })
  songOfRestDie: number;
  
  @Column({ nullable: true })
  sorceryPoints: number;
  
  @Column({ nullable: true })
  unarmoredMovement: number;

  @Column({ nullable: true })
  wildShapeFly: boolean;

  @Column({ nullable: true })
  wildShapeMaxCr: number;

  @Column({ nullable: true })
  wildShapeSwim: boolean;

  @OneToOne((type) => LevelEntity, levelEntity => levelEntity.classSpecific,
    { 
      cascade: true,
      eager: true,
      nullable: true,
    }
  )
  parentLevel: LevelEntity;
}