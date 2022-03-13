import { saveToStorage, getFromStorage, removeStorageItem } from "../../settings/storage.js";
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
         const newData = data.filter((item) => {
             if (isFavourite(item.id)) {
                 return true;
             } else {
                 return false;
             }
         });
         buildDataList(newData, ".data-list");  
         document.querySelector("#clear-favourites").onclick = clearFavourites;
        }

        
    }
favourites();

export function getFavourites() {
    const storedFavourites = getFromStorage("favourites");
    if (!storedFavourites) {
        return null
    } else return storedFavourites;
}

export function isFavourite(itemID) {
    const favourites = getFavourites();
    if (favourites) {
        
        let check = false;
        favourites.forEach((favourite) => {
            if (parseInt(favourite) === parseInt(itemID)) {
                check = true;
            } 
        });
        return check;
    } else return false;
    
    }

export function actionFavourite(event) {
    const id = parseInt(event.target.dataset.id);

    if(isFavourite(id)) {
        removeFromFavourites(id);
        switchFavourite(event.target, "remove");
    } else {
        addToFavourites(id);
        switchFavourite(event.target, "add");
    }
    
    if (document.querySelector("title").innerText === "Favourites") {
        favourites();
    }
}

function addToFavourites(itemID) {
    const favourites = getFavourites();
    let newFavourites = [];
    if (!favourites) {
        newFavourites.push(itemID);
        saveFavourites(newFavourites);
    } else {
        favourites.push(itemID);
        saveFavourites(favourites);
    }
    
    
}

function removeFromFavourites(itemID) {
    //Doesn't check for favourites because this function shouldn't be called if there aren't any.
    const favourites = getFavourites();
    const newFavourites = favourites.filter((item) => item !== itemID);
    saveFavourites(newFavourites);
    
}

function saveFavourites(favourites) {
    saveToStorage("favourites", favourites);
}

function switchFavourite(target, action) {
    target.classList.toggle("favourited");
    target.parentElement.parentElement.classList.toggle("favourite");
    if (action === "remove") {
        target.innerText = "Favourite";
    } else {
        target.innerText = "Unfavourite";
    }
}

function clearFavourites() {
    removeStorageItem("favourites");
    favourites();
}