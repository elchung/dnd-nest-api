import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CharacterTreasure } from "./CharacterTreasure.entity";

@Entity()
export class CharacterTreasureItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ default: 1 })
  quantity!: number;

  @Column({ nullable: true })
  weightInLbs?: number;

  @Column({ default: false })
  bookmarked!: boolean;

  @Column({ default: false })
  magical!: boolean;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne((type) => CharacterTreasure, (treasure) => treasure.items)
  parentTreasure!: CharacterTreasure;
}
