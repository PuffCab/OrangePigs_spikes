import React, { useState } from "react";

type User = {
  userName: string;
  email: string;
  userImage: string;
};

function Profile() {
  const [user, setUser] = useState<User | null>(null);

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("you need to login first");
      //either warn the user, or redirect him to login
    }

    if (token) {
      //send request

      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      try {
        const response = await fetch(
          "http://localhost:5001/api/users/profile",
          requestOptions
        );
        console.log("response :>> ", response);
        if (!response.ok) {
          alert(response.statusText);
        }
        if (response.ok) {
          const result = await response.json();
          console.log("result :>> ", result);
          const user = result.user as User;
          setUser(user);
        }
      } catch (err) {
        const error = err as Error;
        console.log("error :>> ", error.message);
      }
    }
  };

  return (
    <div>
      <h2>{user ? user.userName : ""} Profile</h2>
      <button onClick={getProfile}>get Profile</button>
      {user && <img src={user.userImage} style={{ width: "200px" }} />}
    </div>
  );
}

export default Profile;
