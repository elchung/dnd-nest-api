import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class MagicItemEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text", { array: true, nullable: true })
  description: string[];

  @Column({ nullable: true })
  equipmentCategory: string;

  @Column({ nullable: true })
  name: string;
}
