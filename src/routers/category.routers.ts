import { Router } from "express"
import {
  createCategoryController,
  readCategoriesController,
  retriveCategoriesController,
} from "../controllers/category.controllers"
import { ensureAdminMiddleware } from "../middlewares/ensureAdminValid.middlewares"
import { ensureDataValidMiddleware } from "../middlewares/ensureDataValid.middlewares"
import ensureNameCategoryExistsMiddleware from "../middlewares/ensureNameCategoryExists.middlewares"
import { ensureTokenValidMiddleware } from "../middlewares/ensureTokenValid.middlewares"
import { createCategorySchema } from "../schemas/category.schemas"

const categoryRoutes: Router = Router()

categoryRoutes.post(
  "",
  ensureTokenValidMiddleware,
  ensureAdminMiddleware,
  ensureDataValidMiddleware(createCategorySchema),
  ensureNameCategoryExistsMiddleware,
  createCategoryController
)
categoryRoutes.get("", readCategoriesController)
categoryRoutes.get("/:id/realEstate", retriveCategoriesController)

export default categoryRoutes
