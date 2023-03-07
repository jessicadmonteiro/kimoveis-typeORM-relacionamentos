import { z } from "zod"
import { createAddressesSchema, returnAddressesSchema } from "./address.schemas"
import { returnCategorySchema } from "./category.schemas"


const createRealStateSchema = z.object({
    value: z.number().multipleOf(0.01).or(z.string()),
    size: z.number().int().gt(0),
    address: createAddressesSchema,
    categoryId: z.number(),

})

const returnRealEstateSchema = z.object({
    value: z.number().multipleOf(0.01).or(z.string()),
    size: z.number().int().gt(0),
    address: returnAddressesSchema,
    category: returnCategorySchema,
    id: z.number(),
    sold: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string()
})


const arrayRealEstateSchema = returnRealEstateSchema.array()

export {
    createRealStateSchema,
    arrayRealEstateSchema,
    returnRealEstateSchema
}