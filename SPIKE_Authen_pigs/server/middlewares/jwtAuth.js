import passport from "passport";

//5. Turn passport into a middleware we can use in our routes
const jwtAuth = passport.authenticate("jwt", { session: false });

//for reference : if you want to log what is happening whent method "authenticate" is called
// const jwtAuth = () => {
//   console.log("token is missing".bgYellow);
//   return passport.authenticate("jwt", { session: false });
// };

export default jwtAuth;
