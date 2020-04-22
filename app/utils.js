
async function getJSONData(apiLink) {
    let response = await fetch(apiLink);
    let data = await response.json();
    return data;
}

function capitalizeWords(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}