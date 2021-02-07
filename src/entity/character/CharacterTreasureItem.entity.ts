import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CharacterTreasureEntity } from "./CharacterTreasure.entity";

@Entity()
export class CharacterTreasureItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

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

  @ManyToOne((type) => CharacterTreasureEntity, (treasure) => treasure.items)
  parentTreasure!: CharacterTreasureEntity;
}
