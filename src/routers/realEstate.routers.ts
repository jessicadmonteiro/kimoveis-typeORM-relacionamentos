import { Router } from "express"
import {
  createRealEstateController,
  readRealEstateController,
} from "../controllers/realEstate.controllers"
import ensureAddressExistsMiddlerwares from "../middlerwares/ensureAddressExists.middlerwares"
import { ensureAdminMiddleware } from "../middlerwares/ensureAdminValid.middlewares"
import { ensureDataValidMiddleware } from "../middlerwares/ensureDataValid.middlewares"
import { ensureTokenValidMiddleware } from "../middlerwares/ensureTokenValid.middlewares"
import { createRealStateSchema } from "../schemas/realEstate.schemas"

const realEstateRoutes: Router = Router()

realEstateRoutes.post("", ensureTokenValidMiddleware, ensureAdminMiddleware, ensureDataValidMiddleware(createRealStateSchema), ensureAddressExistsMiddlerwares, createRealEstateController)
realEstateRoutes.get("", readRealEstateController)

export default realEstateRoutes
