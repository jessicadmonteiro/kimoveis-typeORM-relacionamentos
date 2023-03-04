import { Router } from "express"
import { createScheduleController } from "../controllers/schedule.controllers"
import ensureDateAndyTimeExists from "../middlerwares/ensureDateAndyTimeExists.middlerwares"
import { ensureTokenValidMiddleware } from "../middlerwares/ensureTokenValid.middlewares"

const scheduleRoutes: Router = Router()

scheduleRoutes.post("", ensureTokenValidMiddleware, ensureDateAndyTimeExists, createScheduleController)

export default scheduleRoutes