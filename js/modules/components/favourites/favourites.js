import buildDataList from "../common/buildDataList";
import displayMessage from "../common/displayMessage.js";

(async function favourites() {
    const data = await fetch(dataURL);
    const favourites = getFavourites();
    if (!favourites) {
        displayMessage("warning-message", "You don't seem to have any favourites", ".data-list");
    } else {
         const newData = data.filter((item) => {
            favourites.forEach((id) => {
                if (item.id === parseInt(id)) {
                    return true;
                }
            });
        });

        buildDataList(newData, ".data-list");
    }



})();

export function getFavourites() {
    const storedFavourites = getFromStorage("favourites");
    if (!storedFavourites) {
        return null
    } else return storedFavourites;
}