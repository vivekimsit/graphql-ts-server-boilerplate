import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("amenity")
export class Amenity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("varchar", { length: 255 })
  value: string;

  @Column("varchar", { nullable: true })
  type: string;

  @Column("boolean", { default: true })
  active: boolean;

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
