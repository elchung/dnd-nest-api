import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class EquipmentDamageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  damageDice: string;

  @Column({ nullable: true })
  damageType: string;
}
