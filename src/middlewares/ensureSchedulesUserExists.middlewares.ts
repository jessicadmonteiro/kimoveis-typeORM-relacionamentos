import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import {  Schedule} from "../entities"
import { AppError } from "../error"

const ensureSchedulesUserExistsMiddleware= async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const userSchedule = await scheduleRepository.createQueryBuilder("schedules").
    where("schedules.user = :userId", {userId: req.user.id}).
    andWhere("schedules.date = :date", {date: req.body.date}).
    andWhere("schedules.hour = :hour", {hour: req.body.hour}).
    getOne()

    if(userSchedule){
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }

    return next()
}

export {
    ensureSchedulesUserExistsMiddleware
}