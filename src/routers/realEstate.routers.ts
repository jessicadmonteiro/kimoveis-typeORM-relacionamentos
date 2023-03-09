import { Router } from "express"
import {
  createRealEstateController,
  readRealEstateController,
} from "../controllers/realEstate.controllers"
import ensureAddressExistsMiddlewares from "../middlewares/ensureAddressExists.middlewares"
import { ensureAdminMiddleware } from "../middlewares/ensureAdminValid.middlewares"
import { ensureDataValidMiddleware } from "../middlewares/ensureDataValid.middlewares"
import { ensureTokenValidMiddleware } from "../middlewares/ensureTokenValid.middlewares"
import { createRealStateSchema } from "../schemas/realEstate.schemas"

const realEstateRoutes: Router = Router()

realEstateRoutes.post(
  "",
  ensureTokenValidMiddleware,
  ensureAdminMiddleware,
  ensureDataValidMiddleware(createRealStateSchema),
  ensureAddressExistsMiddlewares,
  createRealEstateController
)
realEstateRoutes.get("", readRealEstateController)

export default realEstateRoutes
