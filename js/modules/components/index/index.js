import { dataURL } from "../../settings/url.js";
import fetchData from "../../tools/network/fetchData.js";
import buildDataList from "../buildDataList.js";
import displayMessage from "../common/displayMessage.js";

export default (async function index() {
    const data = await fetchData(dataURL);
    if (!data) {
        displayMessage("error-message", "There was a problem fetching the data", ".data-list");
    } else buildDataList(data, ".data-list");
    
})();