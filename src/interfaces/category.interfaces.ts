import { arrayCategorySchema, createCategorySchema, returnCategorySchema } from "../schemas/category.schemas"
import { z } from "zod"

type iCategory = z.infer<typeof returnCategorySchema>
type iCategoryCreate = z.infer<typeof createCategorySchema>
type iCategoryArray = z.infer<typeof arrayCategorySchema>

export {
    iCategory,
    iCategoryCreate,
    iCategoryArray
}