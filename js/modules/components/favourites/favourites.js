import { saveToStorage, getFromStorage } from "../../settings/storage.js";
import buildDataList from "../common/buildDataList.js";
import displayMessage from "../common/displayMessage.js";
import {dataURL} from "../../settings/url.js";
import getData from "../../tools/network/fetchData.js";



async function favourites() {
    
    const data = await getData(dataURL);
    const favourites = getFavourites();
    if (!favourites || favourites.length === 0) {
        displayMessage("warning-message", "You don't seem to have any favourites", ".data-list");
    } else {
         
         const newData = data.filter((item) => isFavourite(item.id));
         buildDataList(newData, ".data-list");  
        }

        
    }
favourites();

function getFavourites() {
    const storedFavourites = getFromStorage("favourites");
    if (!storedFavourites) {
        console.log("null favourites");
        return null
    } else return storedFavourites;
}

function isFavourite(itemID) {
    const favourites = getFavourites();
    if (favourites) {
        if (favourites.length >= 1) {
            favourites.forEach((favourite) => {
                if (parseInt(favourite.id) === parseInt(itemID)) {
                    return true;
                } else return false;
            });
        } else {
            if (parseInt(favourites) === parseInt(itemID)) {
                return true;
            } else return false;
        }
    } else return false;
}

export function actionFavourite(event) {
    const id = parseInt(event.target.dataset.id);
    console.log(id);
    const hasFavourite = isFavourite(id);

    if(hasFavourite) {
        removeFromFavourites(id);
        
    } else {
        addToFavourites(id);
    }

    if (window.location.pathName === "/favourites.html") {
        favourites();
    }
}

function addToFavourites(itemID) {
    const favourites = getFavourites();
    console.log(favourites);
    let newFavourites = [];
    if (!favourites) {
        newFavourites.push(itemID);
    } else {
        newFavourites = favourites.push(itemID);
    }
    saveFavourites(newFavourites);
    
}

function removeFromFavourites(itemID) {
    const newFavourites = getFavourites().filter((item) => !isFavourite(itemID));
    saveFavourites(newFavourites);
    
}

function saveFavourites(favourites) {
    saveToStorage("favourites", favourites);
}