import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./views/Register";

function App() {
  const [count, setCount] = useState(0);

  const fetchCities = () => {
    fetch("localhost:5001/api/cities")
      .then((response) => response.json())
      .then((result) => console.log("result", result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <>
      <h1>Travel App</h1>
      <Register />
    </>
  );
}

export default App;
