import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class ConditionEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text", { array: true, nullable: true })
  description: string[];

  @Column({ nullable: true })
  name: string;
}
