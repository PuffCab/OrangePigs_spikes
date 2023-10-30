import cityModel from "../models/cityModel.js";

const getAllCities = async (req, res) => {
  console.log("req :>> ".bgMagenta, req);
  try {
    const allCities = await cityModel.find();

    console.log("allCities :>> ", allCities);
    if (allCities.length < 1) {
      res.status(204).json({ message: " no cities stored" });
    } else {
      res.status(200).json({
        number: allCities.length,
        allCities,
      });
    }
  } catch (error) {
    console.log("error :>> ".bgRed, error);
    res.status(500).json({
      error: "someting went wrong in the server",
    });
  }
};

const getCitiesByCountryCode = async (req, res) => {
  // console.log("req :>> ".bgMagenta, req);
  // const countryCode = req.params.countryCode;
  const { countryCode } = req.params;
  const { likes } = req.query;

  if (likes) {
    try {
      const cities = await cityModel.find({
        countryCode: countryCode,
        likes: { $gte: likes },
      });
      res.status(200).json({
        number: cities.length,
        cities,
      });
    } catch (error) {}

    //do stuff using likes
  } else {
    //all of the stuff below happens when there are no "likes" sent from the client.
    try {
      const cities = await cityModel.find({ countryCode: countryCode });
      if (cities.length > 0) {
        res.status(200).json({
          number: cities.length,
          cities,
        });
      } else {
        res.status(200).json({
          number: cities.length,
          message: `sorry no cities with  country code ${countryCode}`,
        });
      }
    } catch (error) {
      console.log("error :>> ", error);
      res.status(500).json({
        errorMessage: "something went wrong in the request",
        error,
      });
    }
  }
};

export { getAllCities, getCitiesByCountryCode };
