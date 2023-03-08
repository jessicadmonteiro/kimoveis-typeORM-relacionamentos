import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import { AppError } from "../../error"
import { iSchedule, iScheduleReturn } from "../../interfaces/schedule.interfaces"
import { createScheduleSchema, returnScheduleSchema } from "../../schemas/schedule.schemas"

const createScheduleService = async (scheduleData: iSchedule, idUser: number) => {

    const date = new Date(scheduleData.date)
    const day = date.getDay()
    const hour = scheduleData.hour
    

  
    const data = createScheduleSchema.parse(scheduleData)

    if(day === 0 || day === 6){
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user : User | null = await userRepository.findOne({
        where: {
            id: idUser
        }
    })

    if(!user){
        throw new AppError("User not found", 404)
    }

    const realEstate: RealEstate | null = await realEstateRepository.findOne({
        where: {
            id: data.realEstateId
        }
    })

    if(!realEstate){
        throw new AppError("RealEstate not found", 404)
    }

    const newSchedule = scheduleRepository.create({
        date: data.date,
        hour: data.hour,
        realEstate: realEstate!,
        user: user!
    })
    await scheduleRepository.save(newSchedule)

    if(Number(hour[0]) < 8 ){
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }


    return {message: "Schedule created"}
  
}

export {
    createScheduleService
}