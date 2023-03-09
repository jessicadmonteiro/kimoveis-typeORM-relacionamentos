import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { iCategoryCreate } from "../../interfaces/category.interfaces"

const createCategoryService = async (categoryData: iCategoryCreate): Promise<Category> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const newCategory = categoryRepository.create(categoryData)
    await categoryRepository.save(newCategory)

    return newCategory
}

export default createCategoryService