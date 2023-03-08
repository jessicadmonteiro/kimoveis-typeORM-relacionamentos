import { time } from "console"
import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Schedule, User} from "../entities"
import { AppError } from "../error"

const ensureDateAndyTimeExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const schedulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const findSchedules = await schedulesRepository.findOne({
        
        where: {
            date: req.body.date,
            hour: req.body.hour
        }
    })

    if(findSchedules){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    return next()

}

export default ensureDateAndyTimeExists