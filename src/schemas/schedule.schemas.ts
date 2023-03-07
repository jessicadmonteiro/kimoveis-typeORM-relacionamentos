import { z } from "zod"

const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string().datetime()
   
})

const returnScheduleSchema = createScheduleSchema.extend({
    id: z.number()
})


export {
    createScheduleSchema,
    returnScheduleSchema
}