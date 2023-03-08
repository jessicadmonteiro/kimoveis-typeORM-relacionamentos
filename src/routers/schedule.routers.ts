import { Router } from "express"
import { createScheduleController, retriveScheduleController } from "../controllers/schedule.controllers"
import { ensureAdminMiddleware } from "../middlerwares/ensureAdminValid.middlewares"
import { ensureDataValidMiddleware } from "../middlerwares/ensureDataValid.middlewares"
import ensureDateAndyTimeExists from "../middlerwares/ensureDateAndyTimeExists.middlerwares"
import { ensureRealEstateExistsMiddleware } from "../middlerwares/ensureRealEstateExists.middlewares"
import { ensureTokenValidMiddleware } from "../middlerwares/ensureTokenValid.middlewares"
import { createScheduleSchema } from "../schemas/schedule.schemas"

const scheduleRoutes: Router = Router()

scheduleRoutes.post("", ensureTokenValidMiddleware, ensureDataValidMiddleware(createScheduleSchema), ensureDateAndyTimeExists, createScheduleController
)
scheduleRoutes.get("/realEstate/:id", ensureTokenValidMiddleware, ensureAdminMiddleware, ensureRealEstateExistsMiddleware, retriveScheduleController)

export default scheduleRoutes
