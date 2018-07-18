  $('#artistSearch').on('click', function(){
    event.preventDefault();

    var artist = $('#inputBand').val();

    var queryURL = "https://rest.bandsintown.com/artists/" + artist +
    "app_id=codingbootcamp";

$.ajax({
  url: queryURL,
}).then(function(response) {
    console.log(response);
    // var results = response.data;
    });
  });



// <script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
//   <script>
//     // Initialize Firebase
//     var config = {
//       apiKey: "AIzaSyDvedVAaDbkNiaSTFnzGeclFNIbqBIjyqU",
//       authDomain: "feedmeproject-e83a3.firebaseapp.com",
//       databaseURL: "https://feedmeproject-e83a3.firebaseio.com",
//       projectId: "feedmeproject-e83a3",
//       storageBucket: "feedmeproject-e83a3.appspot.com",
//       messagingSenderId: "557116830448"
//     };
//     firebase.initializeApp(config);
//
//     var database = firebase.database();
