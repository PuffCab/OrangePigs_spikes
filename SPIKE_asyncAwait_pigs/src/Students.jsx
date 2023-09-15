import React, { useEffect, useState } from "react";
import Student from "./components/Student";

function Students() {
  console.log("%c component re-rendered", "color:red");
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
  const [cohort, setCohort] = useState(orangePigs);
  const [newStudent, setNewStudent] = useState("");

  const [wassup, setWassup] = useState("wassup");

  const changeInputHandler = (event) => {
    // console.log("i am typing");
    // console.log("event :>> ", event.target.value);
    setNewStudent(event.target.value);
    // console.log("newStudent :>> ", newStudent);
  };
  const addStudent = () => {
    // cohort.push(newStudent); //!this doesn't provoke a re-render of the component
    // console.log("cohort :>> ", cohort);
    setCohort([...cohort, newStudent]);
  };

  const printCohortName = (cohortName) => {
    console.log("we are the " + cohortName);
  };

  const addPToWassup = () => {
    console.log("%cuseEffect run", "color:orange");
    setWassup(wassup + "PPPP");
  };

  useEffect(() => {
    console.log("%cuseEffect run", "color:orange");
    addPToWassup();
  }, [cohort]);

  return (
    //   React fragments : <> </>
    <>
      {/* {console.log("%cnewStudent INSIDE JSX", "color:orange", newStudent)} */}
      <h2>Orange Pigs Cohort</h2>
      <h3>{wassup} !!</h3>

      <input type="text" value={newStudent} onChange={changeInputHandler} />
      <button onClick={addStudent}>Add student</button>

      {cohort.map((student, index) => {
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
