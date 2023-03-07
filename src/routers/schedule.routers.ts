import { Router } from "express"
import { createScheduleController } from "../controllers/schedule.controllers"
import { ensureAdminMiddleware } from "../middlerwares/ensureAdminValid.middlewares"
import ensureDateAndyTimeExists from "../middlerwares/ensureDateAndyTimeExists.middlerwares"
import { ensureTokenValidMiddleware } from "../middlerwares/ensureTokenValid.middlewares"

const scheduleRoutes: Router = Router()

scheduleRoutes.post("",ensureTokenValidMiddleware, ensureDateAndyTimeExists, createScheduleController
);
scheduleRoutes.get("/realEstate/:id", ensureTokenValidMiddleware, ensureAdminMiddleware)

export default scheduleRoutes
