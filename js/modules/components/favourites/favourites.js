export async function favourites() {
    const data = await fetch(dataURL);
    const favourites = getFavourites();
    if (!favourites) {

    } else newData = data.filter((item) => {
        favourites.forEach((id) => {
            if (item.id === parseInt(id)) {
                return true;
            }
        })
    })
}

function getFavourites() {
    const storedFavourites = getFromStorage("favourites");
    if (!storedFavourites) {
        return null
    } else return storedFavourites;
}