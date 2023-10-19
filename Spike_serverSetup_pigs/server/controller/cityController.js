import cityModel from "../models/cityModel.js";

const getAllCities = async (req, res) => {
  const allCities = await cityModel.find();
  console.log("allCities :>> ", allCities);
  res.json({
    number: allCities.length,
    allCities,
  });
};

export { getAllCities };
