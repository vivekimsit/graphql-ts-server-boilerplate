import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Hotel } from "./Hotel";
import { Amenity } from "./Amenity";

@Entity("room")
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("varchar", { length: 50 })
  category: string;

  @Column("varchar", { length: 50 })
  status: string;

  @Column("int")
  number: number;

  @Column("text")
  pictureUrl: string;

  @Column("varchar", { length: 255 })
  description: string;

  @Column("decimal")
  price: number;

  @Column("decimal")
  offerPrice: number;

  @Column("int")
  beds: number;

  @Column("int")
  guests: number;

  @Column("uuid")
  hotelId: string;

  @ManyToOne(() => Hotel, hotel => hotel.rooms)
  hotel: Hotel;

  @ManyToMany(() => Amenity)
  @JoinTable()
  amenities: Amenity[];

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
