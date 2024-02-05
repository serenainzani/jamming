function generateRandomString(length) {
    var text = "";
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function authoriseImplictGrantSpotify() {
    var client_id = "7e9b1fa4e992419db57c7c003eda9e31"; // Your client id
    var redirect_uri = "http://localhost:3000"; // Your redirect uri

    var state = generateRandomString(16);

    var scope = "user-read-private user-read-email";

    var url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    url += "&state=" + encodeURIComponent(state);

    fetch(url);
    console.log(url);
}

authoriseImplictGrantSpotify();
