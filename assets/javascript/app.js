$(document).ready(function() {

<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
  <script>
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDvedVAaDbkNiaSTFnzGeclFNIbqBIjyqU",
      authDomain: "feedmeproject-e83a3.firebaseapp.com",
      databaseURL: "https://feedmeproject-e83a3.firebaseio.com",
      projectId: "feedmeproject-e83a3",
      storageBucket: "feedmeproject-e83a3.appspot.com",
      messagingSenderId: "557116830448"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

-------------------------------------------------------------
    $('input').on('submit', function(){
      event.preventDefault();

      var restaurantName = ;
      var url = 'https://api.yelp.com/v3' + ' ';


/businesses/search
/businesses/{id}/reviews
    });





















    </script>
