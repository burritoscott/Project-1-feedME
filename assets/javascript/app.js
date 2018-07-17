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
    </script>


var queryURL = 'https://api.foursquare.com/v2/venues/search?near=' + nearVenue + '&query=' + searchTerm + '&limit=10&client_id=ITN3RTSLWS0EZ1NZ0NKWQBNJBUSE2F44N43VS5ZI0BYN0EHA&client_secret=1GDMIQM0YKKKWYAQH0WVTAYBLIJ3YXZJMDIAOHDVFXFJI4DC&v=20140806'
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function (data) {
      console.log(data.response);

    // Notes Below:

    //API Key: e2146a17c6918286de09fe9bc122347d
