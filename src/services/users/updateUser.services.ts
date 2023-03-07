import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { iUserReturn, iUserUpdate } from "../../interfaces/users.interfaces"
import { returnUserSchema } from "../../schemas/users.schemas"

const updateUserService = async (userData: iUserUpdate, idUser: number): Promise<iUserReturn> => {
    
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData = await userRepository.findOneBy({
        id:idUser
    })

    const necessaryData = {
        name: userData.name || oldUserData!.name,
        email: userData.email || oldUserData!.email
    }

    const user = userRepository.create({
        ...oldUserData,
        ...necessaryData
    })


    await userRepository.save(user)

    const updateUser = returnUserSchema.parse(user)

    return updateUser
}

export default updateUserService