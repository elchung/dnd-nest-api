import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EquipmentCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { array: true, nullable: true })
  equipment: string[];

  @Column({ nullable: true })
  name: string;
}
