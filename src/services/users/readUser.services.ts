import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { iUsersArray } from "../../interfaces/users.interfaces"
import { arrayUserSchema } from "../../schemas/users.schemas"

const readUserService = async (): Promise<iUsersArray> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers: Array<User> = await userRepository.find()

    const users: iUsersArray = arrayUserSchema.parse(findUsers)

    return users
    
}

export {
    readUserService
}