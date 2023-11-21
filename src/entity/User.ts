import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number = 0

    @Column()
    firstName: string = ""

    @Column()
    lastName: string = ""
}

export { User }