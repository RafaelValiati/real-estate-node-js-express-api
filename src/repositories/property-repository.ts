import { PropertyModel } from "../models/property-model"



let database: PropertyModel[]=[
    {
        id: 1,
        type: "residential",
        address: "123 Maple Street, Springfield, IL",
        yearBuilt: 1995,
        squareFootage: 2400,
        numberOfBedrooms: 4,
        numberOfBathrooms: 3,
        rentPerMonth: 1800,
        price: 320000
    },
    {
        id: 2,
        type: "commercial",
        address: "456 Elm Street, Springfield, IL",
        yearBuilt: 2005,
        squareFootage: 5000,
        numberOfBedrooms: 0,
        numberOfBathrooms: 2,
        rentPerMonth: 5000,
        price: 800000
    },
    {
        id: 3,
        type: "residential",
        address: "789 Oak Avenue, Springfield, IL",
        yearBuilt: 2010,
        squareFootage: 1500,
        numberOfBedrooms: 3,
        numberOfBathrooms: 2,
        rentPerMonth: 1500,
        price: 250000
    },
    {
        id: 4,
        type: "residential",
        address: "321 Pine Lane, Springfield, IL",
        yearBuilt: 1980,
        squareFootage: 2000,
        numberOfBedrooms: 4,
        numberOfBathrooms: 2.5,
        rentPerMonth: 1700,
        price: 310000
    },
    {
        id: 5,
        type: "commercial",
        address: "654 Cedar Road, Springfield, IL",
        yearBuilt: 2015,
        squareFootage: 7000,
        numberOfBedrooms: 0,
        numberOfBathrooms: 4,
        rentPerMonth: 7500,
        price: 1200000
    }
]


export const findAllProperties = async (): Promise<PropertyModel[]> =>{
    return database
}


export const findPropertyById = async (id: number): Promise<PropertyModel[]> => {


    // const isEven = number => number % 2 === 0;
    // const evenNumbers = numbers.filter(isEven);

    const foundProperty = database.filter(property => property.id === id)

    return foundProperty

}

export const insertProperty = async (property: PropertyModel) => {
    console.log(property)
    console.log('dentro de insertProperty no repository')
    database.push(property)
}

export const deleteOneProperty = async (id: number) => {
    const index = database.findIndex(property => property.id === id)

    if(index !== -1){
        database.splice(index,1)
        return true
    } 

    return false
}

export const findAndModifyProperty = async (id:number, propertyData: PropertyModel): Promise<PropertyModel> => {

    const propertyIndex = database.findIndex(property => property.id === id)

    
    if(propertyIndex !== -1){
        database[propertyIndex] = propertyData
    }   

    return database[propertyIndex]
}


