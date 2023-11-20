import React, { ChangeEvent, MouseEvent, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControlProps,
  InputGroup,
  Row,
} from "react-bootstrap";
import CitiyCard from "../components/CitiyCard";

type CityType = {
  id: string;
  name: string;
  countryCode: string;
  image: string;
  likes: number;
};
type OKResponse = {
  number: number;
  allCities: CityType[];
};

function Home() {
  const [cities, setCities] = useState<CityType[] | null>(null);
  const [citiyName, setCitiyName] = useState("");
  const [displayCities, setDisplayCities] = useState(false);

  const getCityByName = async (
    e:
      | ChangeEvent<FormControlProps>
      | MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => {
    console.log("e.type", e.type);
    console.log("name", name);
    // setDisplayCities(false);
    const response = await fetch(
      `http://localhost:5001/api/cities/city/${name}`
    );
    console.log("response :>> ", response);
    if (response.ok) {
      const result = (await response.json()) as OKResponse;
      console.log("result", result);

      if (e.type === "change") {
        setCities(result.allCities);
      }
      if (e.type === "click") {
        setCities(result.allCities);
        setDisplayCities(true);
      }
      if (e.type === "click" && result.number < 1) {
        alert("no cities with that name");
      }
    }
  };
  return (
    <>
      <h2>Which City You Want to Discover?</h2>
      <InputGroup className="mb-3">
        <Button
          variant="outline-primary"
          id="button-addon1"
          onClick={(e) => {
            getCityByName(e, citiyName);
          }}
        >
          Search
        </Button>

        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          //   onChange={(e)=> setCitiyName(e.target.value)}
          onChange={(e) => {
            getCityByName(e, e.target.value);
            setCitiyName(e.target.value);
            setDisplayCities(false);
          }}
          list="cities-list"
        />
        <datalist id="cities-list">
          {cities &&
            cities.map((city) => {
              return <option key={city.name}>{city.name}</option>;
            })}
        </datalist>
      </InputGroup>
      <Container>
        <Row>
          {displayCities &&
            cities &&
            cities.map((city) => {
              return (
                <Col key={city.name}>
                  <CitiyCard city={city} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default Home;
