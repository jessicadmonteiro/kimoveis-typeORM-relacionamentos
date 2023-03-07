import { Request, Response } from "express"
import { number } from "zod"
import { iCategoryCreate } from "../interfaces/category.interfaces"
import createCategoryService from "../services/category/createCategory.services"
import { readCategoriesService } from "../services/category/readCategories.services"
import { retriveCategoriesService } from "../services/category/retriveCategories.services"

const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const categoryData: iCategoryCreate = req.body
    const category = await createCategoryService(categoryData)

    return res.status(201).json(category)
}

const readCategoriesController = async (req: Request, res: Response): Promise<Response> => {

    const categries = await readCategoriesService()

    return res.json(categries)
}

const retriveCategoriesController = async (req: Request, res: Response): Promise<Response> => {
    const idCategory: number = parseInt(req.params.id)

    const categries = await retriveCategoriesService(idCategory)

    return res.json(categries)
}


export {
    createCategoryController,
    readCategoriesController,
    retriveCategoriesController
}