import { z } from "zod"

const createAddressesSchema = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).nullish(),
    city: z.string().max(20),
    state: z.string().max(2)
})

const returnAddressesSchema = createAddressesSchema.extend({
    id: z.number()
})

export {
    createAddressesSchema,
    returnAddressesSchema
}
