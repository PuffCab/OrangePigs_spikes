import jwt from "jsonwebtoken";

const generateToken = (userID) => {
  const payload = {
    sub: userID,
    // exp: 123123123,
  };

  const secretOrPrivateKey = "my little secret";

  const options = {
    expiresIn: "3 days",
    // audience: "CAB",
  };

  const token = jwt.sign(payload, secretOrPrivateKey, options);
  console.log("token :>> ", token);
  return token;
};

export { generateToken };
