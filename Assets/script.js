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

      // Constructing HTML containing the artist information
    //   var artistName = $("<h1>").text(response.name);
    //   var artistURL = $("<a>").attr("href", response.url).append(artistName);
    //   var artistImage = $("<img>").attr("src", response.thumb_url);
    //   var trackerCount = $("<h2>").text(response.tracker_count + " fans tracking this artist");
    //   var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
    //   var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

      // Empty the contents of the artist-div, append the new artist content
    //   $("#artist-div").empty();
    //   $("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
    });
  }
   
});

