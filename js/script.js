

/** 
 *  Fetch data-array from api, display 3 props for each item.
 *  Each item will have an icon that allows users to add or remove items from a list of favourites. 
 *  Create a separate page where the user's favourite items will be displayed. 
 *  Create a "remove favourites" button that clears favourites list and re-renders html.
 *  Let admin user sign in and edit or update items,
 **/

import { clearStorage } from "./modules/settings/storage.js";

 document.querySelector(".storage-clear").onclick = clearStorage;