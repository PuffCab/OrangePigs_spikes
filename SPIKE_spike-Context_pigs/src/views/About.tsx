import React from "react";

function About() {
  return (
    <div>
      <h1>About</h1>
      <AboutCard />
    </div>
  );
}

export default About;

function AboutCard() {
  return <p>some info</p>;
}
