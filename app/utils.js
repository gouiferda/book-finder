
async function getJSONData(apiLink) {
    let response = await fetch(apiLink);
    let data = await response.json();
    return data;
}

function capitalizeWords(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}


function issetObj(val) {
    return (val != null && (typeof val !== 'undefined'));
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    window.location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function betterArgName(name)
{
    return capitalizeWords(name).replace(/\s/g, '+');
}

function revArgName(name)
{
    return capitalizeWords(name).replace('+',' ');
}

function isEmptyObj(obj)
{
    return (Object.keys(obj).length === 0 && obj.constructor === Object);
}

function betterNA(val)
{
    if (issetObj(val))
    {
        return val;
    }else{
        return 'N/A';
    }
}