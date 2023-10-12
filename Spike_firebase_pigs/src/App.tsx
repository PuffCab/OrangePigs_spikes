import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Link,
  Outlet,
  createHashRouter,
  createMemoryRouter,
} from "react-router-dom";
import "./App.css";
import Characters from "./views/Characters";
import About from "./views/About";
import Home from "./views/Home";
import MyNavbar from "./components/MyNavbar";
import ErrorPage from "./views/ErrorPage";
import Details from "./views/Details";
import Season1 from "./views/Season1";
import Season2 from "./views/Season2";
import Seasons from "./views/Seasons";
import SeasonsLayout from "./components/SeasonsLayout";
import { CharactersContextProvider } from "./context/CharactersContext";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import CharactersWithCustomHook from "./components/CharactersWithCustomHook";
import { app, auth } from "./config/firebaseConfig";
import Register from "./views/Register";
import Login from "./views/Login";

function App() {
  // console.log("app :>> ", app);
  console.log("auth :>> ", auth);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route
          path="characters"
          element={
            <ProtectedRoute>
              <Characters />
            </ProtectedRoute>
          }
        />
        <Route path="characters/:characterName" element={<Details />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="customHook" element={<CharactersWithCustomHook />} />
        <Route
          path="about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="seasons" element={<SeasonsLayout />}>
          <Route index element={<Seasons />} />
          <Route path="season1" element={<Season1 />} />
          <Route path="season2" element={<Season2 />} />
        </Route>
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    )
  );

  return (
    <>
      <h1>Rick & Morty</h1>
      <AuthContextProvider>
        <CharactersContextProvider>
          <RouterProvider router={router} />
        </CharactersContextProvider>
      </AuthContextProvider>
    </>
  );
}

const Root = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
    </>
  );
};
export default App;
