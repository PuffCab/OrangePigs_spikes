import React, { useEffect } from "react";

function CountriesWithFetch() {
  const fetchCountries = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // const graphql = JSON.stringify({
    //   query:
    //     "query{\n    continents{\n        name\n        code\n        countries{\n            capital\n            currency\n            emoji\n           \n        }\n    }\n}",
    //   variables: {},
    // });
    var graphql = JSON.stringify({
      query:
        "query{\n   languages{\n       name\n       native\n       rtl\n   }\n}",
      variables: {},
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
      redirect: "follow",
    };

    fetch("https://countries.trevorblades.com/graphql", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log("countries", result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return <div>CountriesWithFetch</div>;
}

export default CountriesWithFetch;
