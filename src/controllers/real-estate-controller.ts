import {Request, Response} from "express"
import * as RealEstateServices from "../services/real-estate-services"


export const getRealEstate = async (req: Request, res: Response) => {

    const response = await RealEstateServices.getRealEstateService()
    res.status(response.statusCode).json((response.body))

}