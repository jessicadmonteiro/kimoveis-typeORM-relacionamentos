import { Router } from "express"
import {
  createUserController,
  deleteUserController,
  readUserController,
  updateUserController,
} from "../controllers/users.controller"
import { ensureAdminMiddleware } from "../middlerwares/ensureAdminValid.middlewares"
import { ensureDataValidMiddleware } from "../middlerwares/ensureDataValid.middlewares"
import ensureEmailExistsMiddleware from "../middlerwares/ensureEmailExists.middlewares"
import { ensureTokenValidMiddleware } from "../middlerwares/ensureTokenValid.middlewares"
import ensureUserExistsMiddleware from "../middlerwares/ensureUserExists.middlewares"
import { ensureUserOrAdminMiddleware } from "../middlerwares/ensureUserOrAdmin.middlewares"
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
