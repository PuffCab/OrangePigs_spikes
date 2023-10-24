import React, { ChangeEvent, FormEvent, useState } from "react";

type UserImage = {
  userImage: string;
};

interface User extends UserImage {
  userName: string;
  email: string;
  password: string;
}

function Register() {
  const [selectedFile, setselectedFile] = useState<File | string>("");
  const [newUser, setNewUser] = useState<User>({
    userName: "",
    email: "",
    password: "",
    userImage: "",
  });

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e :>> ", e.target.files?.[0]);

    setselectedFile(e.target.files?.[0] || "");
  };
  const handleFileSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("userImage", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/users/imageUpload",
        requestOptions
      );
      const result = (await response.json()) as UserImage;
      console.log("result :>> ", result);
      //here we get the URL for the user profile picture

      setNewUser({ ...newUser, userImage: result.userImage });
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const handleRegisterInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.name :>> ", e.target.name);
    console.log("e.target.value :>> ", e.target.value);
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmitRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const urlencoded = new URLSearchParams();
    urlencoded.append("userName", newUser.userName);
    urlencoded.append("email", newUser.email);
    urlencoded.append("password", newUser.password);
    urlencoded.append(
      "userImage",
      newUser.userImage
        ? newUser.userImage
        : "https://venturebeat.com/wp-content/uploads/2016/02/anonymous-face.shutterstock_365080829.jpg"
    );

    const requestOptions = {
      method: "POST",
      body: urlencoded,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/users/register",
        requestOptions
      );
      const result = await response.json();
      console.log("result :>> ", result);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <div>
        <div>
          <form className="input-form" onSubmit={handleSubmitRegister}>
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={handleRegisterInput}
            />
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleRegisterInput}
            />
            <label htmlFor="email">email</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleRegisterInput}
            />
            <label htmlFor="password">password</label>
            <button type="submit">Register</button>
          </form>
        </div>

        <form onSubmit={handleFileSubmit}>
          <input type="file" name="file" id="file" onChange={handleFileInput} />
          <button type="submit">upload image</button>
        </form>
      </div>
      {newUser.userImage && (
        <div>
          <img src={newUser.userImage} alt="user-avatar-picture" />
        </div>
      )}
    </div>
  );
}

export default Register;
