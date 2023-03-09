import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Address } from "../entities"
import { AppError } from "../error"
import { createAddressesSchema } from "../schemas/address.schemas"

const ensureAddressExistsMiddlewares = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)

    const newAddress = createAddressesSchema.parse(req.body.address)

    const findAddress = await addressRepository.findOne({
       where: {
       ...newAddress,
       number: newAddress.number? newAddress.number: ""
        }
        
    })

    if(findAddress){
        throw new AppError("Address already exists", 409)
    }

    return next()
}

export default ensureAddressExistsMiddlewares