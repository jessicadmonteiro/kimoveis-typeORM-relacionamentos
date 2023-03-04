import { z } from "zod"
import { createRealEstateSchema, returnRealEstateSchema, createRealStateObjectAddressSchema, arrayRealEstateSchema } from "../schemas/realEstate.schemas"


type iRealEstate = z.infer<typeof createRealEstateSchema>
type iRealEstateReturn = z.infer<typeof returnRealEstateSchema>
type iRealStateObjectAddress = z.infer<typeof createRealStateObjectAddressSchema>
type iRealEstateArray = z.infer<typeof arrayRealEstateSchema>


export {
    iRealEstate,
    iRealEstateReturn,
    iRealStateObjectAddress,
    iRealEstateArray
}