import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn
} from "typeorm";
import { User } from "./User";
import { Room } from "./Room";
import { Address } from "./Address";

@Entity("hotel")
export class Hotel extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("varchar", { length: 100, nullable: true })
  slug: string;

  @Column("text", { nullable: true })
  thumbnailUrl: string;

  @Column("text", { nullable: true })
  coverUrl: string;

  @Column("varchar", { length: 255 })
  description: string;

  @Column("uuid")
  userId: string;

  @ManyToOne(() => User, user => user.hotels)
  user: User;

  @OneToMany(() => Room, room => room.hotel)
  rooms: Room[];

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @Column("timestamp", {
    precision: 3,
    default: () => "CURRENT_TIMESTAMP(3)"
  })
  createdOn: Date;

  @Column("timestamp", {
    precision: 3,
    default: () => "CURRENT_TIMESTAMP(3)",
    onUpdate: "CURRENT_TIMESTAMP(3)"
  })
  updatedOn: Date;
}
