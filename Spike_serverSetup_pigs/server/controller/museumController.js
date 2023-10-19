import museumModel from "../models/musumModel.js";

const getAllMuseums = async (req, res) => {
  const allMuseums = await museumModel.find();

  res.json({
    number: allMuseums.length,
    allMuseums,
  });
};

export { getAllMuseums };
