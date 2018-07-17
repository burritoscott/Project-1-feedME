$(document).ready(function() {




    $.ajax({
    url: "https://developers.zomato.com/api/v2.1/restaurant?res_id=RESID",
    dataType: 'json',
    async: true,
    beforeSend: function(xhr){xhr.setRequestHeader('user-key',
    'e2146a17c6918286de09fe9bc122347d');},  // This inserts the api key into the HTTP header
    success: function(response) {
     console.log(response) }
     });
    });
    
    // Notes Below:
    
    //API Key: e2146a17c6918286de09fe9bc122347d