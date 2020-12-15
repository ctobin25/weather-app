//weather key 

$(document).ready(function() {

    var API_KEY = 'ef2f2f4387eaa4acb7befe9698fe58fb'

     // Event handler for user clicking the select-city button
  $("#add-city").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the city name
    var inputCity = $("#city-input").val().trim();

    // Running the searchCity function
    searchCity(inputCity);
  });

  function searchCity(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      console.log(response);

    });
  }
   
});

