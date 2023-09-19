//* 1 fetching the data...

const fetchGames = () => {
  const url =
    "https://www.scorebat.com/video-api/v3/feed/?token=MTc5NzdfMTY1MDgwNjEyMF85Yjk1NTZjNDY5MWQ0MzczOGJlOGNiYTI2MWI4OGVkN2M2YzU4NmY3";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      // console.log("result :>> ", result);
      const games = result.response;
      console.log("games :>> ", games);
      controller(games);
      // createHtmlTable(games);
      // createDropDown(games);
    });
};

//* 2 function for creating table
const createHtmlTable = (games) => {
  let table = document.getElementById("table");
  table.innerText = "";

  games.forEach((game, i) => {
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerText = game.title;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerText = game.competition;
    row.appendChild(column2);

    let column3 = document.createElement("td");
    //* reformat date
    // console.log("game.date :>> ", typeof game.date);
    const dateTransformed = new Date(game.date).toLocaleString("de-DE", {
      day: "2-digit",
      month: "long",
      year: "2-digit",
    });
    // console.log("date :>> ", date);

    column3.innerText = dateTransformed;

    row.appendChild(column3);
  });
};

//* 3 generate Dropdown options
const createDropDown = (games) => {
  // console.log("games in dropdown :>> ", games);
  const dropdown = document.getElementById("leagueDropdown");

  const competitionsArray = games.map((game) => {
    return game.competition;
  });
  // console.log("competitionsArray :>> ", competitionsArray);
  const uniqueCompetitionsArray = [...new Set(competitionsArray)];
  // console.log("uniqueCompetitionsArray :>> ", uniqueCompetitionsArray);

  uniqueCompetitionsArray.forEach((competitionName) => {
    const option = document.createElement("option");
    option.innerText = competitionName;

    dropdown.appendChild(option);
  });
};

//* 4 make controller function

function controller(games) {
  //get the data

  // build table with all data
  createHtmlTable(games);

  //generate DropDown filter options
  createDropDown(games);

  // set event listeners
  setEventListeners(games);
  //create filter functions
}

//*5 add event listeners
const setEventListeners = (games) => {
  const datePicker = document.querySelector("#date");
  datePicker.addEventListener("change", () => {
    // console.log("date selected");
    filterByDate(games);
  });

  const competitionDropdown = document.querySelector("#leagueDropdown");
  competitionDropdown.addEventListener("change", () => {
    // console.log("dropdown selected");
    filterByDropDown(games);
  });
};

//* 6 fiter by dropdown
const filterByDropDown = (games) => {
  // get dropdown value

  const competitionDropdown = document.querySelector("#leagueDropdown");
  const compentitionDropdownValue = competitionDropdown.value;
  console.log("compentitionDropdownValue :>> ", compentitionDropdownValue);
  // console.log("games in filterByDropdown :>> ", games);

  const filteredArray = games.filter((game) => {
    return compentitionDropdownValue === game.competition;
  });
  // console.log("filteredArray :>> ", filteredArray);
  createHtmlTable(filteredArray);
};

//* 7 fiter by date
const filterByDate = (games) => {
  // get date value
  console.log("filtering by date");
  const datePicker = document.querySelector("#date");
  const datePickerValue = datePicker.value;
  const datePickerValueTransformed = new Date(datePickerValue).setHours(
    0,
    0,
    0,
    0
  );
  // console.log("datePickerValue :>> ", dateValueTransformed);

  const filteredArray = games.filter((game) => {
    console.log("game.date :>> ", game.date);
    const gameDateTransformed = new Date(game.date).setHours(0, 0, 0, 0);
    return datePickerValueTransformed === gameDateTransformed;
  });

  // console.log("filteredArray :>> ", filteredArray);
  createHtmlTable(filteredArray);
};

//for you guys :
//9 combine filters

fetchGames();
