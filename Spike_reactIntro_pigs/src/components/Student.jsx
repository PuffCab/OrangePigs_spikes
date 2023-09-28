import React from "react";

// function Student(props) {
// !With destructuring
function Student({ studentName, printCohortName }) {
  //   console.log("props :>> ", props);
  const styleObject = {
    fontSize: "50px",
    backgroundColor: "yellow",
  };

  const cohortName = "Orange Pigs";

  const sendCohortNameUp = () => {
    // props.printCohortName(cohortName);
    printCohortName(cohortName);
  };

  return (
    <div>
      {/* <p>I am {props.studentName}</p>; */}
      <p id="">I am {studentName}</p>;
      {/* <button onClick={sendCohortNameUp}>reveal cohort name</button> */}
      <button style={styleObject} onClick={() => printCohortName(cohortName)}>
        reveal cohort name
      </button>
    </div>
  );
}

export default Student;
