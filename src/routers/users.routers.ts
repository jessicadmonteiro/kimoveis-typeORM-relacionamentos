import { Router } from "express"
import {
  createUserController,
  deleteUserController,
  readUserController,
  updateUserController,
} from "../controllers/users.controller";
import { ensureAdminMiddleware } from "../middlewares/ensureAdminValid.middlewares"
import { ensureDataValidMiddleware } from "../middlewares/ensureDataValid.middlewares"
import ensureEmailExistsMiddleware from "../middlewares/ensureEmailExists.middlewares"
import { ensureTokenValidMiddleware } from "../middlewares/ensureTokenValid.middlewares"
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middlewares"
import { ensureUserOrAdminMiddleware } from "../middlewares/ensureUserOrAdmin.middlewares"
import { updateUserSchema, userCreateSchema } from "../schemas/users.schemas"

const userRoutes: Router = Router()

userRoutes.post(
  "",
  ensureDataValidMiddleware(userCreateSchema),
  ensureEmailExistsMiddleware,
  createUserController
)
userRoutes.get(
  "",
  ensureTokenValidMiddleware,
  ensureAdminMiddleware,
  readUserController
)
userRoutes.delete(
  "/:id",
  ensureUserExistsMiddleware,
  ensureTokenValidMiddleware,
  ensureAdminMiddleware,
  deleteUserController
)
userRoutes.patch(
  "/:id",
  ensureTokenValidMiddleware,
  ensureUserExistsMiddleware,
  ensureUserOrAdminMiddleware,
  ensureDataValidMiddleware(updateUserSchema),
  updateUserController
)

export default userRoutes
