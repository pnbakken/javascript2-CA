
import searchInit from "../../tools/search/search.js";
import {actionFavourite, isFavourite} from "../favourites/favourites.js";
import displayMessage from "./displayMessage.js";


export default function buildDataList(data, target) {
    
    const dataTarget = document.querySelector(target);
    dataTarget.innerHTML = "";

    data.forEach((item) => {
        dataTarget.innerHTML += buildListItem(item);
    })
    document.querySelectorAll(".favourite-button").forEach( (button) => {
        button.addEventListener("click", actionFavourite);
    })
    
}

function buildListItem(item) {  
    const {title, author, id, summary} = item;
    const favourite = isFavourite(id) ? "favourite" : "" ;
    const favourited = (favourite === "favourite") ? "favourited" : "" ;
    const buttonText = (favourite === "favourite") ? "Unfavourite" : "Favourite" ;

    // I'm basically doing these favourites-actions twice. Here, and in switchFavourite() in favourites.js. Probably a better way to handle that.


return `<div class="data-item ${favourite}">
            <div class="item-header">
                <p class="item-title">${title}</p>
                <p class="item-author">${author}</p>
                <p class="item-summary">${summary}</p>
                <button class="favourite-button ${favourited}" data-id="${id}">${buttonText}</button>
            </div>
        </div>`;


}

