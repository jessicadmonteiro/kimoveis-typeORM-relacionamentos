import "express-async-errors"
import express, { Application } from "express"
import { handleErros } from "./error"
import userRoutes from "./routers/users.routers"
import loginRoutes from "./routers/login.routers"
import categoryRoutes from "./routers/category.routers"
import realEstateRoutes from "./routers/realEstate.routers"
import scheduleRoutes from "./routers/schedule.routers"


const app: Application = express()
app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/categories", categoryRoutes)
app.use("/realEstate", realEstateRoutes)
app.use("/schedules", scheduleRoutes)

app.use(handleErros)
export default app