import { z } from "zod"
import { createAddressesSchema, returnAddressesSchema } from "../schemas/address.schemas"

type iAndress = z.infer<typeof createAddressesSchema>
type iAndressReturn = z.infer<typeof returnAddressesSchema>

export {
    iAndress,
    iAndressReturn
}