import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ProficiencyEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  description?: string;

  @Column({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  name?: number;
}
