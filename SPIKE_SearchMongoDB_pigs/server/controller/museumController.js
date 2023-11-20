import museumModel from "../models/museumModel.js";

const getAllMuseums = async (req, res) => {
  const allMuseums = await museumModel
    .find()
    .populate({ path: "city", select: ["name", "countryCode"] });

  res.json({
    number: allMuseums.length,
    allMuseums,
  });
};

export { getAllMuseums };
