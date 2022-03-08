import fetchData from "../tools/network/fetchData.js";
import { dataURL } from "../settings/url.js";


export default async function buildDataList(target) {
    
    const dataTarget = document.querySelector(target);
    dataTarget.innerHTML = `<div class="loader"></div>`;

    const data = await fetchData(dataURL);



    if (data) {
        
    }

    
}

function buildListItem(item) {
    
}

