import { z } from "zod"
import { createRealStateSchema, arrayRealEstateSchema } from "../schemas/realEstate.schemas"



type iRealEstate = z.infer<typeof createRealStateSchema>
type iRealEstateArray = z.infer<typeof arrayRealEstateSchema>


export {
    iRealEstate,
    iRealEstateArray
}