import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { User } from "./User";
import { Room } from "./Room";

@Entity("hotel")
export class Hotel extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("varchar", { length: 100, nullable: true })
  slug: string;

  @Column("text")
  thumbnailUrl: string;

  @Column("text", { nullable: true })
  coverUrl: string;

  @Column("varchar", { length: 255 })
  description: string;

  @Column("double precision")
  latitude: number;

  @Column("double precision")
  longitude: number;

  @Column("uuid")
  userId: string;

  @ManyToOne(() => User, user => user.hotels)
  user: User;

  @OneToMany(() => Room, room => room.hotel)
  rooms: Room[];
}
