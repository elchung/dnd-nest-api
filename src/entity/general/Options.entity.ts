import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class OptionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  choose?: number;

  @Column("text", { array: true, nullable: true })
  from?: string[];

  @Column({ nullable: true })
  type?: string;
}
