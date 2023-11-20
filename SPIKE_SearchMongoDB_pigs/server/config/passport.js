import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import userModel from "../models/userModel.js";

const opts = {
  secretOrKey: "my little secret",
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

//1.Define Strategy
const jwtPassportStrategy = new JwtStrategy(opts, async function (
  jwt_payload,
  done
) {
  console.log("passport before model block".bgYellow);

  try {
    const user = await userModel.findById(jwt_payload.sub);

    if (user) {
      //if user is found
      console.log("user found".bgYellow);
      return done(null, user);
    } else {
      console.log("passport else block".bgYellow);
      return done(null, false);
    }
  } catch (error) {
    console.log("passport err block".bgYellow);
    return done(error, false);
  }
});

//2. use this strategy with passwport.

const passportConfig = (passport) => {
  passport.use(jwtPassportStrategy);
};

export default passportConfig;
