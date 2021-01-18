import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class LanguageEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  description?: string;

  @Column({ nullable: true })
  script?: string;

  @Column({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  name?: number;

  @Column("text", { array: true, nullable: true })
  typical_speakers?: string[];
}
