import * as HttpResponse from "../utils/http-helper"
import * as RealEstateRepository from "../repositories/real-estates-repository"


export const getRealEstateService = async () =>    {

    const data = await RealEstateRepository.findAllRealEstates()

    const response = HttpResponse.ok(data)

    return response
}