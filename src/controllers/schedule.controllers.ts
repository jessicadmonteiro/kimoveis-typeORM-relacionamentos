import { Request, Response } from "express"
import { iSchedule } from "../interfaces/schedule.interfaces"
import { createScheduleService } from "../services/schedule/createSchedule.services"
import { retriveScheduleService } from "../services/schedule/retriveSchedule.services"

const createScheduleController = async (req: Request, res: Response): Promise<Response> => {
    
    const scheduleData: iSchedule = req.body
    const idUser: number = req.user.id

    const newSchedule = await createScheduleService(scheduleData, idUser)

    return res.status(201).json(newSchedule)
}

const retriveScheduleController  = async (req: Request, res: Response): Promise<Response> => {

    const idRealEstate: number = parseInt(req.params.id)

    const schedules = await retriveScheduleService(idRealEstate)

    return res.json(schedules)
}
export {
    createScheduleController,
    retriveScheduleController
}