import "./App.css";
import MyComponent from "./MyComponent";
import Students from "./Students";
import About from "./components/About";
import Home from "./components/Home";
function App() {
  console.log("this is JS");
  // JS code here

  //.....
  return (
    <div>
      <h1 className="red">Hello React World</h1>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <MyComponent /> */}
      <Students />
      <p style={{ color: "blue", backgroundColor: "purple" }}>inline styled</p>
    </div>
  );
}

export default App;
