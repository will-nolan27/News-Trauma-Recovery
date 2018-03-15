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

  var url = "https://newsapi.org/v2/top-headlines?" +
         "sources=bbc-news&" +
         "apiKey=85680e66dfa24f7bbb4bbc364c98c63a";
var req = new Request(url);
fetch(req)
   .then(function(response) {
       console.log(response.json());
   })

  var input = "dogs";
  var meme = "http://version1.api.memegenerator.net//Generators_Search?q=" + input + "&pageIndex=0&pageSize=12&apiKey=b939f19b-e825-43d7-a423-a52dd5a7b20e"
  
  var req = new Request(meme);
fetch(req)
   .then(function(response) {
       console.log(response.json());
   })

