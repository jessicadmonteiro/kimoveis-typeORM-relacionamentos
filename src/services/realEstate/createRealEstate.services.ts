import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { iRealEstate } from "../../interfaces/realEstate.interfaces"
import { createRealStateSchema, returnRealEstateSchema } from "../../schemas/realEstate.schemas"

const createRealEstateService = async (data: iRealEstate, categoryId: number) => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const newRealData = createRealStateSchema.parse(data)

    const category: Category | null = await categoryRepository.findOne({
        where: {
           id: categoryId
        }
    }) 

    const newAddress = addressRepository.create({
        ...newRealData.address
    })

    await addressRepository.save(newAddress)


    const realEstate = realEstateRepository.create({
        category: category!,
        value: newRealData.value,
        size: newRealData.size,
        address: newAddress
    })
    await realEstateRepository.save(realEstate)

    const newRealEstate = returnRealEstateSchema.parse(realEstate)

    return newRealEstate
}

export default createRealEstateService