import { getRounds, hashSync } from 'bcryptjs'
import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    
    BeforeInsert,
    BeforeUpdate
} from "typeorm"

@Entity("users")
class User {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 45})
    name: string

    @Column({type: "varchar", length: 45, unique: true})
    email: string

    @Column({default: false})
    admin: boolean 

    @Column({type: "varchar", length: 120})
    password: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @DeleteDateColumn()
    deletedAt: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }

}

export {
    User
}