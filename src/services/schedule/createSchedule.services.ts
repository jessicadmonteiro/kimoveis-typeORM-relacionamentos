import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Schedule } from "../../entities"
import { iSchedule, iScheduleReuturn } from "../../interfaces/schedule.interfaces"
import { returnScheduleSchema } from "../../schemas/schedule.schemas"

const createScheduleService = async (scheduleData: iSchedule): Promise<iScheduleReuturn> => {

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const schedule = scheduleRepository.create(scheduleData)

    await scheduleRepository.save(schedule)

    const newSchedule = returnScheduleSchema.parse(schedule)

    return newSchedule
}

export {
    createScheduleService
}