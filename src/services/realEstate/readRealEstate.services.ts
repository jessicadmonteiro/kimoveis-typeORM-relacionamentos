import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { iRealEstateArray } from "../../interfaces/realEstate.interfaces"
import { arrayRealEstateSchema } from "../../schemas/realEstate.schemas"

const readRealEstateService = async (): Promise<iRealEstateArray> => {
    
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findRealEstate: Array<RealEstate> = await realEstateRepository.find()

    const realEstate: iRealEstateArray = arrayRealEstateSchema.parse(findRealEstate)

    return realEstate
}


export {
    readRealEstateService
}