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