import { RealEstateModel } from "../models/real-estate-model"
import fs from "fs/promises"



export const findAllRealEstates = async (): Promise<RealEstateModel[]> =>{
    const data = await fs.readFile("./src/data/real-estate.json", "utf-8")
    const realEstates: RealEstateModel[] = JSON.parse(data)
    return realEstates
}
