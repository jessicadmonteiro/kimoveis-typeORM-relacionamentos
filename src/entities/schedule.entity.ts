import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne
} from "typeorm"
import { User } from "./user.entity"
import { RealEstate } from "./realEstate.entity"

@Entity("schedules_users_properties")
class Schedule {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'date'})
    date: Date | string

    @Column({type: "time"})
    hour: string

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate

    @ManyToOne(() => User, (user) => user.schedules)
    user: User

}

export {
    Schedule
}