export default async function postData(url, outData) { // This only works for the logging in post. would be better to have the options-object as a variable parameter.
    const data = JSON.stringify(outData);
    const options = {
        method: "POST",
        body : data,
        headers : {
            "Content-type" : "application/json",
        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch(err) {
        console.error(err);
        return err;
    }
}