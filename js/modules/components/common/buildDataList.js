
import {actionFavourite} from "../favourites/favourites.js";


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

return `<div class="data-item">
            <div class="item-header">
                <p class="item-title">${title}</p>
                <p class="item-author">${author}</p>
                <p class="item-summary">${summary}</p>
                <button class="favourite-button" data-id="${id}">Favourite</button>
            </div>
        </div>`;


}

