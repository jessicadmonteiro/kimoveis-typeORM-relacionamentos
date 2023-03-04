
import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../error"
import { updateUserSchema } from "../schemas/users.schemas"


const ensureUserOrAdminMiddleware = async (req: Request, res: Response, next: NextFunction):Promise<Response | void>  => {

    const userId: number = parseInt(req.params.id)
    const idUserLogado: number = req.user.id

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({
        where:{
            id: idUserLogado
        }
    })

    const admin = findUser!.admin

    if(!admin && userId !== idUserLogado){

        throw new AppError("Insufficient permission", 403)
    }

    return next()

}

export {
    ensureUserOrAdminMiddleware
}