import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Schedule} from "../entities"
import { AppError } from "../error"

const ensureSchedulesRealEstateExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const schedule = await scheduleRepository.createQueryBuilder("schedules").
    where("schedules.realEstate = :realEstateId", {realEstateId: req.body.realEstateId}).
    andWhere("schedules.date = :date", {date: req.body.date}).
    andWhere("schedules.hour = :hour", {hour: req.body.hour}).
    getOne()

    if(schedule){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    return next()
}


export {
    ensureSchedulesRealEstateExistsMiddleware
}
