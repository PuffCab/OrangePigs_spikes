import { getAllCities } from "../controller/cityController.js";
import express from "express";

const router = express.Router();

router.get("/all", getAllCities);

export default router;
