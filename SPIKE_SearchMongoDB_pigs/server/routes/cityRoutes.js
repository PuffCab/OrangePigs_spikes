import {
  getAllCities,
  getCitiesByCountryCode,
  getCityByName,
} from "../controller/cityController.js";
import express from "express";

const router = express.Router();

router.get("/all", getAllCities);
router.get("/:countryCode", getCitiesByCountryCode);
router.get("/city/:name", getCityByName);

export default router;
