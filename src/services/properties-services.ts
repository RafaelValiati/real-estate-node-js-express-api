import { response } from "express"
import * as PropertyRepository from "../repositories/property-repository"
import * as HttpResponse from "../utils/http-helper"
import { PropertyModel } from "../models/property-model"


export const getPropertyService = async () => {

    const data = await PropertyRepository.findAllProperties()

    let response = null

    if(data){
       response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }

    
    return response
}

export const getPropertyByIdService = async (id:number) => {
    // pedir pro repositório de dados
    const data = await PropertyRepository.findPropertyById(id)

    let response = null

    if(data){
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }

    return response
}


export const createPropertyService = async(property: PropertyModel) => {

    let response = null
    
    if(Object.keys(property).length !== 0){
        
        await PropertyRepository.insertProperty(property)
        response = await HttpResponse.created()

    } else {
        response = await HttpResponse.badRequest()
    }

    return response
    
}

export const deletePropertyService = async(id: number) => {
    let response = null
    const isDeleted = await PropertyRepository.deleteOneProperty(id)

    if(isDeleted){
        response = HttpResponse.ok({message:"deleted"})
    } else {
        response = await HttpResponse.badRequest()
    }

    return response

}

export const updatePlayerService = async (id: number, propertyData: PropertyModel) => {
    const data = await PropertyRepository.findAndModifyProperty(id, propertyData)

    let response = null

    if(Object.keys(data).length === 0 ){
        response = await HttpResponse.badRequest()
    } else {
        response = await HttpResponse.ok(propertyData)
    }

    

    return response
} 