export default async function postData(url, outData) {
    const data = JSON.stringify(outData);
    const options = {
        method: "POST",
        body = data,
        header= {
            "Content-type" : "application/json",
        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch(err) {
        console.error(err);
        return err;
    }
}