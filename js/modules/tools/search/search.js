import buildDataList from "../../components/common/buildDataList.js";
import displayMessage from "../../components/common/displayMessage.js";

let data;

export default function searchInit(inData) {
    data = inData;
    const searchForm = document.querySelector("#search-form");
    searchForm.onkeyup = doSearch;
    searchForm.onsubmit = clearSearch; // Not sure about the usability of clearing the form on submit, just doing it this way because I already had the form constant
}

function doSearch(event) {
    
    const matches = findMatch(event.target.name, event.target.value.trim());
    
    if (matches && matches.length >= 1) {
        buildDataList(matches, ".data-list");
    } else {
        displayMessage("warning-message", "Search found no results", ".data-list");
    }

}

function findMatch(searchTerm, searchQuery) {
  
const matchData = data.filter((item) => {
    if (item[searchTerm].toLowerCase().includes(searchQuery.toLowerCase())) {
        return true;
    } else return false;
})
         
return matchData;
    
}

function clearSearch(event) {
    event.preventDefault();
    const inputs = event.target.querySelectorAll("input");
    inputs.forEach( (input) => {
        input.value = "";
        //input.keyup();  //I'm trying to get the normal item display back without redrawing the html. Stackoverflow tells me element.keyup() is a thing, but I can't get it working. Maybe I could change something in the findMatch() function, but I don't know.
    });
    buildDataList(data, ".data-list"); // I failed..., but the user gets the behaviour I wanted.
}