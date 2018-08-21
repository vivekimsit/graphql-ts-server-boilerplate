import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany
} from "typeorm";
import { Hotel } from "./Hotel";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 255 })
  email: string;

  @Column("text")
  password: string;

  @Column("boolean", { default: false })
  confirmed: boolean;

  @Column("boolean", { default: false })
  forgotPasswordLocked: boolean;

  @OneToMany(() => Hotel, hotel => hotel.user)
  hotels: Hotel[];
}
