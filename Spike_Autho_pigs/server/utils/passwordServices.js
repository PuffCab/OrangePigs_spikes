import bcrypt from "bcrypt";

const hashPassword = async (userPassword) => {
  console.log("userPassword :>> ", userPassword);
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPassword = await bcrypt.hash(userPassword, salt);

  return hashedPassword;
};

const verifyPassword = async (userPassword, hashedPassword) => {
  try {
    const isVerified = await bcrypt.compare(userPassword, hashedPassword);
    console.log("isVerified :>> ", isVerified);
    return isVerified;
  } catch (error) {
    console.log("error checking password:>> ", error);
  }
};

export { hashPassword, verifyPassword };
