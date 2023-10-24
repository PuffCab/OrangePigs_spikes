import bcrypt from "bcrypt";

const hashPassword = async (userPassword) => {
  console.log("userPassword :>> ", userPassword);
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPassword = await bcrypt.hash(userPassword, salt);

  return hashedPassword;
};

export { hashPassword };
