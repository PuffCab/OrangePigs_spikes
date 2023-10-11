import React from "react";
import useMyfetch from "../hooks/useMyfetch";

function CharactersWithCustomHook() {
  const charactersData = useMyfetch(
    "https://rickandmortyapi.com/api/character"
  );
  console.log("data :>> ", charactersData.data);
  const { data, error, loading } = useMyfetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

    
    const calculateExpensesReturn = (flight, car) {
        // do sth
    }

    const {totalValue} = useCalcutateExpenses (costs)
  console.log("data :>> ", data.);
  return (
    <>
      <div>CharactersWithCustomHook</div>
    </>
  );
}

export default CharactersWithCustomHook;
