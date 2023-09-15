import React from "react";

// function Student(props) {
// !With destructuring
function Student({ studentName }) {
  const cohortName = "Orange Pigs";

  // const sendCohortNameUp = () => {
  //   // props.printCohortName(cohortName);
  //   printCohortName(cohortName);
  // };

  return (
    <div>
      <p id="">I am {studentName}</p>
    </div>
  );
}

export default Student;
