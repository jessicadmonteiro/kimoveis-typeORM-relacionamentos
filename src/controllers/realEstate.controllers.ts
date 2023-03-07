import { Request, Response } from "express"
import createRealEstateService from "../services/realEstate/createRealEstate.services"
import { readRealEstateService } from "../services/realEstate/readRealEstate.services"

const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    
    const data = req.body
    const categoryId = req.body.categoryId
  
    const newRealEstate = await createRealEstateService(data, categoryId)

    return res.status(201).json(newRealEstate)
}

const readRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    
    const realEstate = await readRealEstateService()

    return res.json(realEstate)
}

export {
    createRealEstateController,
    readRealEstateController
}