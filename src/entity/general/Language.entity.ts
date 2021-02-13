import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LanguageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  description?: string;

  @Column({ nullable: true })
  script?: string;

  @Column({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  name?: string;

  @Column("text", { array: true, nullable: true })
  typicalSpeakers?: string[];

  @Column({ nullable: true })
  source: string;
}
