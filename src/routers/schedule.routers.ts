import { Router } from "express"
import {
  createScheduleController,
  retriveScheduleController,
} from "../controllers/schedule.controllers"
import { ensureAdminMiddleware } from "../middlewares/ensureAdminValid.middlewares"
import { ensureDataValidMiddleware } from "../middlewares/ensureDataValid.middlewares"
import { ensureRealEstateExistsMiddleware } from "../middlewares/ensureRealEstateExists.middlewares"
import { ensureSchedulesUserExistsMiddleware } from "../middlewares/ensureSchedulesUserExists.middlewares"
import { ensureTokenValidMiddleware } from "../middlewares/ensureTokenValid.middlewares"
import { createScheduleSchema } from "../schemas/schedule.schemas"
import { ensureSchedulesRealEstateExistsMiddleware } from "../middlewares/ensureSchedulesRealEstateExists.middlewares"

const scheduleRoutes: Router = Router()

scheduleRoutes.post(
  "",
  ensureTokenValidMiddleware,
  ensureDataValidMiddleware(createScheduleSchema),
  ensureSchedulesUserExistsMiddleware,
  ensureSchedulesRealEstateExistsMiddleware,
  createScheduleController
)
scheduleRoutes.get(
  "/realEstate/:id",
  ensureTokenValidMiddleware,
  ensureAdminMiddleware,
  ensureRealEstateExistsMiddleware,
  retriveScheduleController
)

export default scheduleRoutes
