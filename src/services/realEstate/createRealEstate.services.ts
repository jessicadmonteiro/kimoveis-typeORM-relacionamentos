import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address, RealEstate } from "../../entities"
import { iAndress } from "../../interfaces/andress.interfaces"
import { iRealEstate, iRealStateObjectAddress } from "../../interfaces/realEstate.interfaces"

const createRealEstateService = async (data: iRealStateObjectAddress) => {


    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const andressRepository: Repository<Address> = AppDataSource.getRepository(Address)

    const newAddress = andressRepository.create({
        ...data.address
    })
    await andressRepository.save(newAddress)

    const realEstate = realEstateRepository.create({
        value: data.value,
        size: data.size,
        address: newAddress,
        

    })
    await realEstateRepository.save(realEstate)

    return realEstate
}

export default createRealEstateService