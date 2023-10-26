# Authentication & Authorization

## Authentication

Is the process of giving  permission to access a website/app.

## Authorization

Is the process of allowing an user to perform certain requests or operations.

## Json Web Token (JWT)

### What is it?

It is an standarised way to represent data as a JSON object in a secure way between two parties (our Client and Server).
We refer to that data as a __claim__ : a value (usually a pair of key and value) that represents what/who the subject is.
In simplier words, it's like a small, digitally signed document that can be used to verify who someone is.

### Why we  need it?

Think of an ideal world in which when the first time you visit a country, the inmmigration authorities automatically give you the passport or personal ID from that country.
JWT will be that passport, given to us when we login in a website or app.
It helps websites and apps verify your identity, decide what you're allowed to do, and do it securely.

### What it does?

Once we entered that imaginary country and received that passport, if we want to perform opertaions like opening a bank account, hiring internet or an insurance, we will need to provide our passport number to prove who we are.

Once a JWT is issued to us, will allow us to identify us when doing some operations for which the server requires to know who we are.
It can contain information about the user, encoded in a secure way, that the server can later decode and to know the user is who he __claims__ to be.

That means the server doesn't have to remember who you are all the time. We just need to show our JWT when required, so the server can trust us without having to store our personal details.

## Resources

[JWT documentation](https://jwt.io/)
[Resource for request codes](https://umbraco.com/knowledge-base/http-status-codes/)

## JWT generation

To Generate a JWT token, we should provide to the function/method `.sign()` from the library `jwt` , the information we would like to have enconded in the token.
There is no option/data required to create the token, but since it will be used to identify an user, we should include some piece of information uniquie to the user(id, email, etc...).
To make it more secure, a good and common pracitce is to also specify a validity time for the token. Keep in mind that if it is too long, if a token gets "stolen", it could be use to fake the user identity. On the other hand, if it is too short, the user will be forced to loggin more often.

### Types of claims

#### Registered claims

A list of predefined claims. They are expressed just with 3 letters. Some of them are:

- `exp` : Expiration time. A date fater which a token won't be considered valid anymore. It has to be expressed in _Unix epoch_ time : a number in miliseconds elapsed since the 00:00 hours of the 1st of January 1970.
- `nbf` : Not Before. A date/time before which the token  must not be accepted.
- `iat` : Issued at. Expresses the date/time at which the JWT was generated. Could be used to determine the age of the token.

[see the full list of registered claims here.](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1)

#### Public claims

Basically any information we consider useful to any of the parties involved in handling the tokens. Preferebly, to avoid name conflicts, better use the ones defined in the [_IANA JSON Web Token Registry_](https://www.iana.org/assignments/jwt/jwt.xhtml).

#### Private claims

Custom claims that are neither registered nor public.

#### How to create a token

The method `.sign()` takes up to 3 parameters: _payload_, _secretOrKey_ , and _options_ .

```javascript
const token = jwt.sign(payload, secretOrKey, options)
```

The name of the parameters is not mandatory.

- __payload__ : in this object we can include registered claims (3 letters ), public or private claims.
- __secretOrKey__ : a string or an object with a secret password. Without it, we can still decode a token (try genereting one and pasting it in the debugger from <https://jwt.io/>), but not generate a new one.
- __options__ : an object in which we can also include also registered claims. In that case, we can use the _long_ version. e.g. `exp` will be `experiesIn`. `nbf` will be `notBefore`, `iss` will be `issuer`.

 The advantage of expressing a registered claim in the options object is that for those expressing dates, we can use strings in a more readble way : `"2 days"`, `"8h"`, `"3d"` will be parsed/understood correctly.

In the example below, we use pass information to the method in charge of creating the token, only inside the _payload_ object.
We use _registered claims_ and _custom claims_ .

```javascript
import jwt from "jsonwebtoken"

const issueToken = (userInfo) => {

    const payload = {
        //registered claiims : predefined. Just 3 letters.
          sub:userInfo.id,
        iss:"CodeAcademyBerlin",
        aud:"spain_users",
        exp:1697561591,
        nbf: 1697475191,
    // Custom claims.Inside "payload" We can add any other property we want as claim.
        admin: true,
        name:userInfo.userName,
        myFavoritePet:"dogs"
    }

    const secretOrPrivateKey = process.env.MY_SECRET

    const token = jwt.sign(payload, secretOrPrivateKey)

    return token
}
```

In the example below, we include all the _registered claims_ from the previous example in the _options_ object, so we can see the difference of inserting them in one or the other. 
The same claim cannot be included in both the _payload_ and the _options_ object, e.g. we cannot insert `exp` in _payload_ , and `expiresIn` in _options_ .

```javascript
import jwt from "jsonwebtoken"

const issueToken = (userInfo) => {

    const payload = {
    // Custom claims
        admin: true,
        name:userInfo.userName,
        myFavoritePet:"dogs"
    }

    const secretOrPrivateKey = process.env.MY_SECRET

//as options, we can only include registered claims, but with the long name version
    const options = {
      subject:userInfo.id,
      issuer:"CodeAcademyBerlin",
      audience:"spain_users",
      expiresIn:"3 days",
      notBefore: "48h",
// custom claims are not admitted as optons
    }
    
    const token = jwt.sign(payload, secretOrPrivateKey, options)

    return token
}
```

## PassportJs

### What is it?

It is a popular and widely used authentication middleware for NodeJs applications. It is designed to simplify the process of authorization and managing user sessions.
It is created in a modular way : it give us a range of authentication strategies, for basically almost every popular platform (Facebook,Google, Github, Twitch, twitter, spotify).
It is the equivalent of the _Authentication_ product from Firebase.

### Why we  need it?

Once we entered that imaginary country, we'd like to open a bank account. They give us a formular to fill out. We need to provide our name, adress, but more importantly , we have to provide our passport number. This will be the information the bank will use to confirm our identity.

Passport will allow us to create an authorization strategy to decide if a logged-in user can perform a specific request/operation (delete an account, post new content, edit it, etc...).

Will also allow us to buil strategies to allow users from other platforms (Facebbok, Google) to use their credentials to loggin into our app.

It will represent another layer of security, together with use of Bcrypt, forms validations (front/backend) and protected routes in the client. 

Managing user sessions and authentication tokens can be complex, especially as an app grows. Passport helps with the scalability in that aspect.

### What it does?

- It authenticate/validate tokens.
- Our Client will have to send the token in the header of the request.
- Passport will extract the token from the request, and use the secret used to create it, will check if it is a valid one. It will authenticate it.
- The strategy created in the steps above will be inserted as a middleware in the routes we decide, allowing the request to reach the controller only if the token is valid.
- If the token is valid, we will perform the operation requested by the client (e.g. delete a message), therefore _authorizing_ that request.

### How to use it?

- Configure Strategy

```javascript
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import userModel from "../models/userModel.js"

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //extrat token from header's request
    secretOrKey: process.env.SECRET //the secret used to generate the token
}

const jwtStrategy = new JwtStrategy(jwtOptions, function (jwt_payload, done) {
    //with the token and the secret, JWTStrategy decodes the token and pass payload to next callback.
    //the callabck receives the payload and another callback that will be called when the token verification is "done".
    userModel.findOne({ _id: jwt_payload.sub }, function (err, user) {
        //inside the callback, we take the subject from the payload and find a matching user in our DB.
        //the mongoose method .findOne() takes a second argument: a callback with 2 parameters: an error, if no user is found, and the user, if it is found.
        if (err) {
        
        //if mongoose return an error, err is called. We pass it to the "done" callback, with a second argument "false" , to not allow the request to continue to the controller.
            return done(err, false)
        }
        if (user) {
        //if an user is found, the information is passed to the parameter "user". We call the funcion "done" with no error as first parameter, and in the second we pass the user object. This will insert a "user" field into the request and let continue to the controller.
            return done(null, user)
        } else {
            console.log("there is no account in the database")
        //if there is no user in the DB, we dont get an error. We call the callback "done" passing null as first parameter, and false as second, so the request do not continue to the controller.
            return done(null, false)
        }
    })

} )
```

- Tell Passport to use the Strategy.

 We need to pass the strategy created to the passport package.

```javascript

const passportConfig = (passport) => {
    //this fn. receives the imported package passport, and use the method .use() to pass the strategy.
  passport.use(jwtStrategy)
}

export default passportConfig
```

- Initialize passport when we start our server

 ```javascript
 //index.js
const addMiddlewares = () => {
 //...other middlewares
app.use(passport.initialize())
};
 ```

- We call the function that passes the strategy to passport.

 ```javascript
  //index.js
const addMiddlewares = () => {
 //...other middlewares
app.use(passport.initialize())
passportConfig(passport)
};
 ```
 
 With this two last lines, we pass initialize passport when our server starts, and pass the installed package to the function that will tell passport to use the Strategy. Now passport is configured with our strategy.

- Turn passport into a middleware we can use to process requests from the client.

 ```javascript
 //middlewares/jwtAuth.js
 import passport from "passport";

const jwtAuth = passport.authenticate("jwt", { session: false })

export default jwtAuth

 ```

- Use it to authorize a request from the client

 ```javascript
 

 ```