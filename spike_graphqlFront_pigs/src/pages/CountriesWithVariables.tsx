import { gql, useQuery } from "@apollo/client";
import React from "react";

type ComponentProps = {
  code: string;
};
type Country = {
  awsRegion: string;
  capital: string;
  code: string;
  currency: String;
  emoji: string;
  emojiU: string;
  native: string;
  phone: string;
};
type Continent = {
  code: string;
  countries: [Country];
  name: string;
};
type Response = {
  continent: Continent;
};

const GET_COUNTRY = gql`
  query Country($code: ID!) {
    continent(code: $code) {
      name
      code
    }
  }
`;

function ContinentsWithVariables({ code }: ComponentProps) {
  const { data, loading, error } = useQuery<Response>(GET_COUNTRY, {
    variables: {
      code,
    },
  });
  console.log("data :>> ", data);

  return (
    <div>
      {/* <h1>Countries With Variables</h1> */}
      <div>
        <p>
          {data?.continent.name}- {data?.continent.code}
        </p>
      </div>
    </div>
  );
}

export default ContinentsWithVariables;
