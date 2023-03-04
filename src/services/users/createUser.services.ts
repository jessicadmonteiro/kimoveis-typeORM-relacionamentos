import { AppDataSource } from "../../data-source"
import { iUser, iUserReturn } from "../../interfaces/users.interfaces"
import { User } from "../../entities"
import { Repository } from "typeorm"
import { returnUserSchema } from "../../schemas/users.schemas"

const createUserService = async (userData: iUser): Promise<iUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)
    
    return newUser
}

export default createUserService