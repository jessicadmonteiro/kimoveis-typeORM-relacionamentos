import { z } from "zod"
import { createScheduleSchema, returnScheduleSchema } from "../schemas/schedule.schemas"

type iSchedule = z.infer<typeof createScheduleSchema>
type iScheduleReuturn = z.infer<typeof returnScheduleSchema>

export {
    iSchedule,
    iScheduleReuturn
}