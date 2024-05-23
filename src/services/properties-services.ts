import { response } from "express"
import * as PropertyRepository from "../repositories/property-repository"
import * as HttpResponse from "../utils/http-helper"
import { PropertyModel } from "../models/property-model"


export const getPropertyService = async () => {

    const data = await PropertyRepository.findAllProperties()

 

    if(data){
       return await HttpResponse.ok(data)
    } else {
        return  await HttpResponse.noContent()
    }

    
   
}

export const getPropertyByIdService = async (id:number) => {
    // pedir pro repositório de dados
    const data = await PropertyRepository.findPropertyById(id)

    

    if(data.length !== 0){
        return await HttpResponse.ok(data)
    } else {
        return await HttpResponse.noContent()
    }

    
}


export const createPropertyService = async(property: PropertyModel) => {

    

    if(Object.keys(property).length !== 0){
        
        await PropertyRepository.insertProperty(property)
        return await HttpResponse.created()

    } else {
        return await HttpResponse.badRequest()
    }

    
    
}

export const deletePropertyService = async(id: number) => {
    
    const isDeleted = await PropertyRepository.deleteOneProperty(id)

    if(isDeleted){
        return await HttpResponse.ok({message:"deleted"})
    } else {
        return await HttpResponse.badRequest()
    }

   

}

export const updatePlayerService = async (id: number, propertyData: PropertyModel) => {
    const data = await PropertyRepository.findAndModifyProperty(id, propertyData)

    

    if(Object.keys(data).length === 0 ){
        return await HttpResponse.badRequest()
    } else {
        return await HttpResponse.ok(data)
    }

    

     
} 