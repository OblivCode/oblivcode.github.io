// Function to parse query parameters from URL
function parseQueryParams() {
    var queryParams = {};
    var queryString = window.location.search.substring(1);
    var pairs = queryString.split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        queryParams[key] = value;
    }
    return queryParams;
}

// Parse query parameters
const params = parseQueryParams();
const url = params.arg1;
console.log(url)
// Get domain from URL
const domain = new URL(url).hostname;
document.getElementById("label").innerHTML = "Redirecting to " + domain + "...";

setTimeout(function() {
    window.location.replace(url);
    //window.open(url, '_blank');
    //window.close();
}, 3000);
