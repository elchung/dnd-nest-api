import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { array: true, nullable: true })
  description: string[];

  @Column({ nullable: true })
  name: string;
}
