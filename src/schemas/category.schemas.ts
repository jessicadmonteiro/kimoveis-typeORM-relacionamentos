import { z } from "zod"

const returnCategorySchema = z.object({
    id: z.number(),
    name: z.string().min(3).max(45)
})

const createCategorySchema = returnCategorySchema.omit({
    id: true
})

const arrayCategorySchema = returnCategorySchema.array()

export {
    returnCategorySchema,
    createCategorySchema,
    arrayCategorySchema
}