import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"

const retriveScheduleService = async (idRealEstate: number) =>{

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    
    const realEstate = realEstateRepository.createQueryBuilder("real_estate").
    select(["real_estate", "address", "category", "schedules_users_properties", "users"]).
    innerJoin("real_estate.address", "address").
    innerJoin("real_estate.category", "category").
    innerJoin("real_estate.schedules", "schedules_users_properties").
    innerJoin("schedules_users_properties.user", "users").
    where("real_estate.id = :id", {id: idRealEstate}).
    getOne()

    return realEstate

}

export {
    retriveScheduleService
}