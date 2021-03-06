export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch(err) {
        console.error(err);
        return null;
    }
}