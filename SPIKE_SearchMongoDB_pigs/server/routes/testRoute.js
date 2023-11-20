import { getAllCities } from "../controller/cityController.js";
import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message: "test route",
  });
});

export default router;
