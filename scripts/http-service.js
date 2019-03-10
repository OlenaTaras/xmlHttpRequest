let request = (urlParams) => {
    return new Promise((resolve, reject) => {
        // Make the actual CORS request.
        makeCorsRequest(urlParams);

        function makeCorsRequest(url) {
            // This is a sample server that supports CORS.
            let xhr = createCORSRequest('GET', url);
            if (!xhr) {
                alert('CORS not supported');
                return;
            }

            // Response handlers.
            xhr.onload = function() {
                resolve(JSON.parse(xhr.response));
                // console.log(response);
            };

            xhr.onerror = function() {
                resolve('Woops, there was an error making the request.');
            };

            xhr.send();
        }
    })
};
function createCORSRequest(method, url) {
    let xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}


