import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Tokens {
    @PrimaryGeneratedColumn()
    users_id: Number

    @Column()
    token: String
}
