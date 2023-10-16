import React, { ReactNode, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { isUserAuth } from "../utils/isUserAuth.js";
import { useIsAuth } from "../hooks/useIsAuth.js";

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useContext(AuthContext);
  //   console.log("props :>> ", props);
  //This bouncer will check you and let you in...or not.

  //   return <>{user ? children : <h2>..you are not allowed here</h2>}</>;

  //   // logic using utils funciton
  //   const allowAccess = isUserAuth(user);
  //   console.log("allowAccess :>> ", allowAccess);
  //     return <>{allowAccess ? children : <Navigate to="/" />}</>;

  //logic using a custom Hook

  const allowAccess = useIsAuth();
  return (
    <>
      {loading ? (
        <h1>...LOADING....</h1>
      ) : allowAccess ? (
        children
      ) : (
        <Navigate to="/" />
      )}
    </>
  );

  //without using utils funciton or custom hook
  return <>{user ? children : <Navigate to="/" />}</>;
}

export default ProtectedRoute;
