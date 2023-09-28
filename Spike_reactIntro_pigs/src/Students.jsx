import React from "react";
import Student from "./components/Student";
import "./style/studentsStyle.css";

function Students() {
  let orangePigs = [
    "Helene",
    "Micha",
    "Tahir",
    "Dmitrii",
    "Nico",
    "Merlin",
    "Rafal",
    "Helene",
  ];

  const printCohortName = (cohortName) => {
    console.log("we are the " + cohortName);
  };
  return (
    //   React fragments : <> </>
    <>
      <h2>Orange Pigs Cohort</h2>
      {/* {orangePigs.map((student, index) => {
        return (
          <div key={index}>
            <p> {student}</p>
          </div>
        );
      })} */}
      {orangePigs.map((student, index) => {
        return (
          <div key={index} className="red">
            <Student studentName={student} printCohortName={printCohortName} />
          </div>
        );
      })}
    </>
  );
}

export default Students;
