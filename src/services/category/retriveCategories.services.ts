import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category} from "../../entities"
import { AppError } from "../../error"
import { iCategory } from "../../interfaces/category.interfaces"

const retriveCategoriesService = async (idCategory: number): Promise<iCategory> => {

    const categoryRpository: Repository<Category> = AppDataSource.getRepository(Category)

    const category: Category | null = await categoryRpository.findOne({
        where: {
            id: idCategory
        },
        relations: {
            realEstate: true
        }
    })

    if(!category){
        throw new AppError("Category not found", 404)
    }

   return category
}

export {
    retriveCategoriesService
}