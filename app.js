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

var config = {
    apiKey: "AIzaSyAA340TsjEt9xMesMiovSSKh2GaWaynRHU",
    authDomain: "enlighten-up-dc253.firebaseapp.com",
    databaseURL: "https://enlighten-up-dc253.firebaseio.com",
    projectId: "enlighten-up-dc253",
    storageBucket: "",
    messagingSenderId: "979543628414"
  };
  firebase.initializeApp(config);

  console.log("hello")

  //BBC API
var url = "https://newsapi.org/v2/top-headlines?" +
         "sources=bbc-news&" +
         "apiKey=85680e66dfa24f7bbb4bbc364c98c63a";
var req = new Request(url);
fetch(req)
   .then(function(response) {
       console.log(response.json());
   })


//giphyAPI
var input = $(this).attr("data-name");
        
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            input + "&api_key=Vu9MUre8MbTWoeTRiuH7BX2FzyYwaLeO";

//Dad Joke API
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


//Meme API
"http://version1.api.memegenerator.net//Generators_Search?q=" + input + "&pageIndex=0&pageSize=12&apiKey=b939f19b-e825-43d7-a423-a52dd5a7b20e"
<<<<<<< HEAD
  var input = "dogs";
  var meme = "http://version1.api.memegenerator.net//Generators_Search?q=" + input + "&pageIndex=0&pageSize=12&apiKey=b939f19b-e825-43d7-a423-a52dd5a7b20e"
  
  var req = new Request(meme);
fetch(req)
   .then(function(response) {
       console.log(response.json());
   })

=======
>>>>>>> 285e3cbd1e779d71c02b12c746019b46ccaf864e
