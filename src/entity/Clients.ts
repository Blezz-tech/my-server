import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Clients {
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    username: String

    @Column()
    password: String
}
