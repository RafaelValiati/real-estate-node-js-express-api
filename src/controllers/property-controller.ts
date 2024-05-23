import {Request, Response} from "express"
import * as PropertyService from "../services/properties-services"
import { badRequest, noContent } from "../utils/http-helper"
import { PropertyModel } from "../models/property-model"



export const getProperty = async (req: Request, res: Response) => {

    const httpResponse = await PropertyService.getPropertyService()

    

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPropertyById = async(req: Request,res: Response) => {

    const id= parseInt(req.params.id)
    
    const httpResponse = await PropertyService.getPropertyByIdService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const postProperty = async (req:Request, res: Response) => {

    const bodyValue = req.body
    const httpResponse = await PropertyService.createPropertyService(bodyValue)

    if(httpResponse){
        res.status(httpResponse.statusCode)
        res.json(httpResponse.body)
        console.log('foi controller post property')
    }

}

export const deleteProperty = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await PropertyService.deletePropertyService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const updateProperty = async (req: Request,res: Response) => {

    const id = parseInt(req.params.id)
    const bodyValue: PropertyModel = req.body

    const httpResponse = await PropertyService.updatePlayerService(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.statusCode)

}