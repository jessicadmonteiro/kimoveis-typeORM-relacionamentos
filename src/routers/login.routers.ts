import { Router } from "express"
import { createLoginController } from "../controllers/login.controllers"
import { ensureDataValidMiddleware } from "../middlewares/ensureDataValid.middlewares"
import { createLoginSchema } from "../schemas/login.schemas"

const loginRoutes: Router = Router()

loginRoutes.post(
  "",
  ensureDataValidMiddleware(createLoginSchema),
  createLoginController
)

export default loginRoutes
