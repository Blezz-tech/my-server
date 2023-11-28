import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Rooms {
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    name: Number

    @Column()
    desc_data: String
}