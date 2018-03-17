var config = {
    apiKey: "AIzaSyAA340TsjEt9xMesMiovSSKh2GaWaynRHU",
    authDomain: "enlighten-up-dc253.firebaseapp.com",
    databaseURL: "https://enlighten-up-dc253.firebaseio.com",
    projectId: "enlighten-up-dc253",
    storageBucket: "",
    messagingSenderId: "979543628414"
  };
  firebase.initializeApp(config);

//---------------------------------------------------------------------------------------------------------------------

//BBC API
// Example URL searching for everything on bitcoin: https://newsapi.org/v2/everything?q=bitcoin&apiKey=85680e66dfa24f7bbb4bbc364c98c63a

function buildQueryURL(searchTerm) {
  var queryURL = "https://newsapi.org/v2/top-headlines?q=" + searchTerm;
  var BBCdataURL = queryURL + "&apiKey=85680e66dfa24f7bbb4bbc364c98c63a";

  // Not really sure what this does, feel free to edify meh..
  //var req = new Request(url);
  //fetch(req)
     //.then(function(response) {
         //console.log(response.json());
     //})
    return BBCdataURL;
}
//---------------------------------------------------------------------------------------------------------------------

var dadQueryURL = "https://icanhazdadjoke.com/search";
var input;
// Dad joke api ajax request
$.ajax({
  url: dadQueryURL,
  method: "get", //send it through get method
  data: { 
    page: 1, 
    limit: 20,
    term: input
  },
});

/Dad Joke API
$ curl -H "Accept: application/json" https://icanhazdadjoke.com/search
{
 "current_page": 1,
 "limit": 20,
 "next_page": 2,
 "previous_page": 1,
 "results": [
   {
     "id": "M7wPC5wPKBd",
     "joke": "Did you hear the one about the guy with the broken hearing aid? Neither did he."
   },
   {
     "id": "MRZ0LJtHQCd",
     "joke": "What do you call a fly without wings? A walk."
   },
   ...
   {
     "id": "usrcaMuszd",
     "joke": "What's the worst thing about ancient history class? The teachers tend to Babylon."
   }
 ],
 "search_term": "",
 "status": 200,
 "total_jokes": 307,
 "total_pages": 15
}

//---------------------------------------------------------------------------------------------------------------------

//giphyAPI
var input = $(this).attr("data-name");
        
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=Vu9MUre8MbTWoeTRiuH7BX2FzyYwaLeO";

//Meme API
"http://version1.api.memegenerator.net//Generators_Search?q=" + input + "&pageIndex=0&pageSize=12&apiKey=b939f19b-e825-43d7-a423-a52dd5a7b20e"

function updatePage() {
  var searchTerm = $(".form-control").val().trim();
  var url = buildQueryURL(searchTerm);
  console.log(searchTerm);
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(response) {
    $("#newsDrop").append(response.articles[0].url).attr("href", response.articles[0].url);
  });
}

$("button").on("click", updatePage);

//function clear() {
  //$("#panel-body").empty();
//}

// .on("click") function associated with the Search Button
//$("#update").on("click", function (event) {
  //event.preventDefault();
  //clear();
  //var queryURL = buildQueryURL();
  //$.ajax({
    //url: queryURL,
    //method: "GET"
  //}).then(updatePage);
//});

