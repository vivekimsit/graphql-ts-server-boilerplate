import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import { Hotel } from "./Hotel";

@Entity("room")
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("text")
  pictureUrl: string;

  @Column("varchar", { length: 255 })
  description: string;

  @Column("int")
  price: number;

  @Column("int")
  beds: number;

  @Column("int")
  guests: number;

  @Column("text", { array: true })
  amenities: string[];

  @Column("uuid")
  hotelId: string;

  @ManyToOne(() => Hotel, hotel => hotel.rooms)
  hotel: Hotel;
}
