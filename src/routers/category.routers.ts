import { Router } from "express"
import { createCategoryController, readCategoriesController } from "../controllers/category.controllers"
import { ensureAdminMiddleware } from "../middlerwares/ensureAdminValidMiddlewares"
import { ensureDataValidMiddleware } from "../middlerwares/ensureDataValid.middleware"
import ensureNameCategoryExistsMiddleware from "../middlerwares/ensureNameCategoryExists.middlewares"
import { ensureTokenValidMiddleware } from "../middlerwares/ensureTokenValid.middlewares"
import { createCategorySchema } from "../schemas/category.schemas"

const categoryRoutes: Router = Router()

categoryRoutes.post("", ensureTokenValidMiddleware, ensureAdminMiddleware, ensureDataValidMiddleware(createCategorySchema), ensureNameCategoryExistsMiddleware, createCategoryController)
categoryRoutes.get("", readCategoriesController)

export default categoryRoutes