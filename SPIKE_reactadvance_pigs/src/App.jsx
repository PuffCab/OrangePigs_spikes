import "./App.css";
import MyComponent from "./MyComponent";
import Students from "./Students";
import About from "./views/About";
import Characters from "./views/Characters";
import Counter from "./views/Counter";
import Home from "./views/Home";

function App() {
  console.log("this is JS");
  // JS code here

  //.....
  return (
    <div>
      <h1 className="red">Hello React World</h1>
      {/* <Home />
      <About /> */}
      {/* <MyComponent /> */}
      {/* <Students /> */}
      {/* <Counter /> */}
      <Characters />
    </div>
  );
}

export default App;
