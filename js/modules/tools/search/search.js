import buildDataList from "../../components/common/buildDataList.js";
import displayMessage from "../../components/common/displayMessage.js";

let data;

export default function searchInit(inData) {
    data = inData;
    const searchForm = document.querySelector("#search-form");
    searchForm.onkeyup = doSearch;
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