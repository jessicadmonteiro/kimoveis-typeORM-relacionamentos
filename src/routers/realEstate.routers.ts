import { Router } from "express"
import { createRealEstateController, readRealEstateController } from "../controllers/realEstate.controllers"
import { ensureAdminMiddleware } from "../middlerwares/ensureAdminValidMiddlewares"
import { ensureTokenValidMiddleware } from "../middlerwares/ensureTokenValid.middlewares"

const realEstateRoutes: Router = Router()

realEstateRoutes.post("", ensureTokenValidMiddleware, ensureAdminMiddleware, createRealEstateController)
realEstateRoutes.get("", readRealEstateController)

export default realEstateRoutes