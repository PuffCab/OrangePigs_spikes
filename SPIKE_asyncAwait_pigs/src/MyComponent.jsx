import React from "react";

function MyComponent() {
  const favDog1 = "golden retriever";
  const favDog2 = "Australian sheppard";
  const favDog3 = "doverman";

  const drooling = "high";

  //   function sayFavDog(params) {
  //     if (drooling === "high") {
  //       console.log("my fav dog is " + favDog1);
  //     } else {
  //       console.log("my fav dog is " + favDog2);
  //     }
  //   }
  //   sayFavDog();

  return (
    <div>
      {/* <h2>Logic in JSX - JS style</h2>
      {(() => {
        if (drooling === "high") {
          return <h3>{favDog1}</h3>;
        } else {
          return <h3>{favDog2}</h3>;
        }
      })()} */}

      <h2>Logic in JSX - React style</h2>
      {drooling === "asdasd" ? <h3>{favDog1}</h3> : <h3>{favDog2}</h3>}
    </div>
  );
}

export default MyComponent;
