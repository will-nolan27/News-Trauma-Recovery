//Initialize firebase
var config = {
    apiKey: "AIzaSyAA340TsjEt9xMesMiovSSKh2GaWaynRHU",
    authDomain: "enlighten-up-dc253.firebaseapp.com",
    databaseURL: "https://enlighten-up-dc253.firebaseio.com",
    projectId: "enlighten-up-dc253",
    storageBucket: "",
    messagingSenderId: "979543628414"
};
firebase.initializeApp(config);

var searchTerm = []

function searchGiphy() {

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dWrzYW0BDnzwozrf1PSoC64gqeYLPSby&limit=1";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data;
        console.log(results);
        $("#gif-display").text("");

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");


            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(personImage);
            $("#gif-display").prepend(gifDiv);
        }

    });
}


searchGiphy();


//---------------------------------------------------------------------------------------------------------------------
// BBC API
// Example URL searching for everything on bitcoin:
function buildBBCurl(searchTerm) {
    var queryURL = "https://newsapi.org/v2/top-headlines?sources=bbc-newsq=" + searchTerm;
    var BBCqueryURL = queryURL + "&apiKey=85680e66dfa24f7bbb4bbc364c98c63a";
}
//---------------------------------------------------------------------------------------------------------------------
// Random News API
//Example URL searching for everything on bitcoin: https://newsapi.org/v2/everything?q=bitcoin&apiKey=85680e66dfa24f7bbb4bbc364c98c63a
function buildRANDOMnewsURL(searchTerm) {
    var queryURL = "https://newsapi.org/v2/top-headlines?q=" + searchTerm;
    var RANDOMnewsQUERYurl = queryURL + "&apiKey=85680e66dfa24f7bbb4bbc364c98c63a";
}
//---------------------------------------------------------------------------------------------------------------------
// GIF API
// Example URL searching: https://api.giphy.com/v1/gifs/search?api_key=I1MEwlWrG35JGlUcGlKhGKWv5Gl5NmXV&q=&limit=1&offset=0&rating=PG-13&lang=en
function buildGIFurl(searchTerm) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=I1MEwlWrG35JGlUcGlKhGKWv5Gl5NmXV&q=" + searchTerm;
    var GIFqueryURL = queryURL + "&limit=1";
}
//---------------------------------------------------------------------------------------------------------------------
// Random GIF API
// Example URL searching: https://api.giphy.com/v1/gifs/random?api_key=I1MEwlWrG35JGlUcGlKhGKWv5Gl5NmXV&tag=&rating=G
function buildRANDOMgifURL(searchTerm) {
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=I1MEwlWrG35JGlUcGlKhGKWv5Gl5NmXV&tag=" + searchTerm;
    var RANDOMgirlQUERYurl = queryURL;
}
//---------------------------------------------------------------------------------------------------------------------
// Meme API
function searchMeme() {

    var queryURL = "http://version1.api.memegenerator.net//Instances_Search?q=" + searchTerm + "&pageIndex=1&pageSize=12&apiKey=b939f19b-e825-43d7-a423-a52dd5a7b20e";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var results = response;
        console.log(results);
        $("#gif-display").text("");

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");


            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(personImage);
            $("#gif-display").prepend(gifDiv);
        }

    });
}
//---------------------------------------------------------------------------------------------------------------------
// Dad Joke API *framework*
function buildDADurl(searchTerm) {
    var queryURL = "" + searchTerm;
    var MEMEqueryURL = queryURL + "&apiKey=";
}

// Dad Joke API
//var dadQueryURL = "https://icanhazdadjoke.com/search";
// Dad joke api ajax request
/*$.ajax({
    url: dadQueryURL,
    method: "GET",
    data: {
        page: 1,
        limit: 20,
        term: input
    },
});*/
//---------------------------------------------------------------------------------------------------------------------
//function to drop BBC article upon user's input submission
function generateBBC() {
    var searchTerm = $(".form-control").val().trim();
    var url = buildBBCurl(searchTerm);
    console.log(searchTerm);
    $.ajax({
        url: url,
        method: "GET"
    }).then(function(response) {
        $("#newsDrop").append(response.articles[0].url).attr("href", response.articles[0].url);
    });
}

$("#update").on("click", generateBBC);
//---------------------------------------------------------------------------------------------------------------------
// function to drop random article upon user's input submission
function generateRANDOM() {
    var searchTerm = $(".form-control").val().trim();
    var url = buildRANDOMnewsURL(searchTerm);
    console.log(searchTerm);
    $.ajax({
        url: url,
        method: "GET"
    }).then(function(response) {
        $("#newsDrop").append(response.articles[0].url).attr("href", response.articles[0].url);
    });
}

$("#random").on("click", generateRANDOM);

//---------------------------------------------------------------------------------------------------------------------
//function to drop GIFs upon user's input submission
function generateGIF() {
    var searchTerm = $(".form-control").val().trim();
    var url = buildRANDOMgifURL(searchTerm);
    console.log(searchTerm);
    $.ajax({
        url: url,
        method: "GET"
    }).then(function(response) {
        $("#gifs").append(response).attr("href", response);
    });
}
//
$("button").on("click", generateGIF);
//---------------------------------------------------------------------------------------------------------------------
// function to drop Memes upon user's input submission
function generateMEME() {
    var searchTerm = $(".form-control").val().trim();
    var url = buildMEMEurl(searchTerm);
    console.log(searchTerm);
    $.ajax({
        url: url,
        method: "GET"
    }).then(function(response) {
        $("#memes").append(response).attr("href", response);
    });
}
//
$("button").on("click", generateMEME);
//-
$("#update").on("click", function(event) {
    event.preventDefault();
    var gif = $("#trainName").val().trim();
    if (gif == "") {
        alert("nothing");
    } else {
        searchTerm.push(gif);

        $("#trainName").val("");
        searchGiphy();
        searchMeme();
    }
});


//displaying text for dad joke 
//displaying .empty 
//$("#employee-name-input").val("");
  $("#role-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");
});
