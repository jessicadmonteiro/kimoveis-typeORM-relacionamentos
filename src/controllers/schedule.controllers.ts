import { Request, Response } from "express"
import { iSchedule } from "../interfaces/schedule.interfaces"
import { createScheduleService } from "../services/schedule/createSchedule.services"

const createScheduleController = async (req: Request, res: Response): Promise<Response> => {
    
    const scheduleData: iSchedule = req.body

    const newSchedule = await createScheduleService(scheduleData)

    return res.status(201).json(newSchedule)
}

export {
    createScheduleController
}