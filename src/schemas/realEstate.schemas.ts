import { z } from "zod"
import { createAddressesSchema } from "./address.schemas"

const createRealEstateSchema = z.object({
    value: z.number(),
    size: z.number().int()
})

const returnRealEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
    sold: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
}).omit({
    sold: true,
    createdAt: true,
    updatedAt: true
})


const createRealStateObjectAddressSchema = createRealEstateSchema.extend({
    address: createAddressesSchema,
})

const arrayRealEstateSchema = createRealStateObjectAddressSchema.array()

export {
    createRealEstateSchema,
    returnRealEstateSchema,
    createRealStateObjectAddressSchema,
    arrayRealEstateSchema
}