import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AbilityScoreBonusEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  bonus: number;
}
