import { Router } from "express";
import * as PropertyController from "../controllers/property-controller";
import * as RealEstateController from "../controllers/real-estate-controller"


const router = Router()

router.get("/properties", PropertyController.getProperty)

router.post("/properties", PropertyController.postProperty)

router.delete("/properties/:id", PropertyController.deleteProperty)

router.get("/properties/:id", PropertyController.getPropertyById)

router.patch("/properties/:id", PropertyController.updateProperty)

router.get('/real-estates', RealEstateController.getRealEstate)

export default router