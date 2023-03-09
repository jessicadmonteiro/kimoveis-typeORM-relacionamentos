import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { iCategoryArray } from "../../interfaces/category.interfaces"
import { arrayCategorySchema } from "../../schemas/category.schemas"

const readCategoriesService = async ():Promise<iCategoryArray> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategory: Category[] = await categoryRepository.find()

    const category: iCategoryArray = arrayCategorySchema.parse(findCategory)

    return category
}

export {
    readCategoriesService
}