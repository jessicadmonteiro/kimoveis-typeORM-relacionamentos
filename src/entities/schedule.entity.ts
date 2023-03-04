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
    hour: Date | string

    @ManyToOne(() => RealEstate)
    realEstate: RealEstate

    @ManyToOne(() => User)
    user: User

}

export {
    Schedule
}