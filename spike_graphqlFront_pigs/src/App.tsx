import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CountriesWithFetch from "./pages/CountriesWithFetch";
import Countries from "./pages/Countries";
import CountriesWithVariables from "./pages/CountriesWithVariables";
import ContinentsWithVariables from "./pages/CountriesWithVariables";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>GraphQL Countries</h1>
      {/* <CountriesWithFetch /> */}
      <Countries />

      {/* <ContinentsWithVariables code="EU" />
      <ContinentsWithVariables code="AF" /> */}
    </>
  );
}

export default App;
