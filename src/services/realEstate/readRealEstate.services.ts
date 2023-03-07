import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { iRealEstateArray } from "../../interfaces/realEstate.interfaces"

const readRealEstateService = async (): Promise<iRealEstateArray> => {
    
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstate: Array<RealEstate> = await realEstateRepository.find({
        relations: {
            address: true
        }
    })
   
    return realEstate
}

export {
    readRealEstateService
}