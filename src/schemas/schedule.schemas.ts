import { z } from "zod"

const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string()
   
})

const returnScheduleSchema = createScheduleSchema.extend({
    id: z.number()
})


export {
    createScheduleSchema,
    returnScheduleSchema
}