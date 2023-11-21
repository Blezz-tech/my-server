import { Length } from "class-validator"
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    @Length(4, 20)
    username: String

    @Column()
    @Length(5, 20)
    password: String
}
