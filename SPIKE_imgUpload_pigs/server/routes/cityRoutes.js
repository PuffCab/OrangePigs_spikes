import {
  getAllCities,
  getCitiesByCountryCode,
} from "../controller/cityController.js";
import express from "express";

const router = express.Router();

router.get("/all", getAllCities);
router.get("/:countryCode", getCitiesByCountryCode);

export default router;
