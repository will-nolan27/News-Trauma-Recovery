//Initialize firebase
//$(document).ready(function() {
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
var fireBaseArray = ["dog", "cat", "rainbow", "apples", "color", "duck", "doctor", "baseball", "basketball", "music", "garden", "bug", "facebook", "space", "school", "kitten", "windows", "tech", "baby", "pun", "life"];
var randNum = []


//Giphy API Function
function searchGiphy() {
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dWrzYW0BDnzwozrf1PSoC64gqeYLPSby&limit=1";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var results = response.data;
    console.log(results);
    $("#gifs").attr("src", results[0].images.fixed_height.url);
  });
}


// Meme API Function
function searchMeme() {

  var queryURL = "http://version1.api.memegenerator.net//Instances_Search?q=" + searchTerm + "&pageIndex=1&pageSize=1&apiKey=b939f19b-e825-43d7-a423-a52dd5a7b20e";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var memeImg = (response.result[0].instanceImageUrl);
    console.log(memeImg);
    $("#memes").attr("src", memeImg);
  });
}


// Dad Joke API *framework*
function searchDad() {
  var queryURL = "https://icanhazdadjoke.com/search";
  //return queryURL;
  $.ajax({
    url: queryURL,
    data: { "term": searchTerm },
    type: 'get',
    headers: {
      Accept: "application/json"
    },
    // data: {term: searchTerm}
  }).then(data => {
    console.log((data.results[0]).id);
    var img = (data.results[0]).id;
    $("#dadjoke").attr("src", ("https://icanhazdadjoke.com/j/" + img + ".png"));
  });
}


//Searchable Guardian API
function buildCNNurl(searchTerm) {
  var CNNqueryURL = "https://content.guardianapis.com/search?q=" + searchTerm + "&api-key=049cc8da-ac2b-47db-985c-0fd76b832d2f";
  return CNNqueryURL;
}


function generateCNN() {
  // var searchTerm = $("#trainName").val().trim();
  var url = buildCNNurl(searchTerm);
  $.ajax({
    url: url,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    $("#newsDrop").text(response.response.results[0].webUrl);
    $("#newsDrop").on("click", function () {
      $("#newsDrop").attr("href", response.response.results[0].webUrl);
      window.open(response.response.results[0].webUrl, '');
    })
  });
}


function myFunction() {
  var x = Math.floor((Math.random() * fireBaseArray.length) + 0);
  console.log(x);
  (fireBaseArray[x]);
  searchTerm = (fireBaseArray[x]);
  console.log(searchTerm);
  searchGiphy();
  searchMeme();
  searchDad();
  generateCNN();
  searchTerm = []
};


$("#random").on("click", myFunction)


$("#update").on("click", function (event) {
  event.preventDefault();
  var gif = $("#trainName").val().trim();
  if (gif == "") {
    alert("nothing");
  } else {
    searchTerm = gif;
    fireBaseArray.push(gif);
    console.log(fireBaseArray);
    console.log(searchTerm);
    $("#trainName").val("");
    searchGiphy();
    searchMeme();
    searchDad();
    generateCNN();
  }
});

