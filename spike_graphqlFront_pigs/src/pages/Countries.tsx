import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Country } from "../graphql/__generated__/types";
import {
  useContinentQuery,
  useCountriesBeginWithTheLetterLQuery,
} from "../graphql/__generated__/countries";

type Response = {
  countries: [Country];
};

const GET_COUNTRIES_CAPITAL = gql`
  query Continent {
    countries {
      name
      capital
      emoji
    }
  }
`;

function Countries() {
  // const { data, loading, error } = useQuery<Response>(GET_COUNTRIES_CAPITAL);
  // const { data, loading, error } = useContinentQuery({});
  const { data, loading, error } = useCountriesBeginWithTheLetterLQuery({});
  console.log("data :>> ", data);
  console.log("loading :>> ", loading);
  if (loading) {
    return <h1>....LOADING....</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <h1>Countries with Apollo Client</h1>
      <div>
        {data &&
          data.countries.map((country) => {
            return (
              <div>
                {/* <p>
                  {country.name} - {country.capital} - {country.emoji}
                </p> */}
                <p>{country.emoji}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Countries;
