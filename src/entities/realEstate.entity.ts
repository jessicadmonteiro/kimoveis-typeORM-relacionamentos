import{
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    ManyToOne,
    JoinColumn
} from "typeorm"
import { Address } from "./address.entity"
import { Category } from "./category.entity"

@Entity("real_estate")
class RealEstate {

    @PrimaryGeneratedColumn()
    id: number

    @Column({default: false})
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: number | string

    @Column({type: "integer"})
    size: number

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @OneToOne(()=> Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category
}

export {
    RealEstate
}