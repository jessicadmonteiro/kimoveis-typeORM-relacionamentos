import { z } from "zod"
import { returnRealEstateSchema } from "./realEstate.schemas"
import { returnUserSchema } from "./users.schemas"

const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().int(),
    userId: z.number()
}).omit({
    userId: true
})

const returnScheduleSchema = z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string(),
    realEstate: returnRealEstateSchema,
    user: returnUserSchema
})

export {
    createScheduleSchema,
    returnScheduleSchema
}