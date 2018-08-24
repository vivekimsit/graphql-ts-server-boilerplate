import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bookings")
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("varchar", { length: 100 })
  firstName: string;

  @Column("varchar", { length: 100, nullable: true })
  lastName: string;

  @Column("varchar", { length: 16, nullable: true })
  phoneNumber: string;

  @Column("int")
  age: number;

  @Column("date")
  checkIn: Date;

  @Column("date")
  checkOut: Date;

  @Column("double precision")
  amount: number;

  @Column("int")
  totalRooms: number;

  @Column("int")
  totalGuests: number;

  @Column("varchar", { length: 50, default: "web" })
  bookingSource: string;

  @Column("varchar", { length: 50, default: "work" })
  bookingType: string;

  @Column("varchar", { length: 50, default: "card" })
  paymentMode: string;

  @Column("varchar", { length: 50 })
  status: string;

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
