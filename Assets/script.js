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

  var curday = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };

    console.log(curday('/'));

    var date = curday('/');

  function searchCity(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var today = new Date();
      console.log(today);
      console.log(response);

      var city = $("#city-view")
      var cityName = $("<p>").text("City: " + response.name);
      var icon = $('<img src="http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png" alt="Weather Icon">');
      //var icon = $(`<img src="http://openweathermap.org/img/wn/${response.weather[0].icon}.png alt="Weather Icon">`);
      var displayDate = $("<p>").text("Date: " + date);
      var temp = $("<p>").text("Temperature: " + response.main.temp);
      var humidity = $("<p>").text("Humidity: " + response.main.humidity);
      var wind = $("<p>").text("Wind Speed: " + response.wind.speed);
     city.append(icon,cityName,displayDate,temp, humidity,wind)

     uvIndex(response.coord.lat, response.coord.lon)


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

  function uvIndex(lat,lon){
    var queryURL = `http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=${API_KEY}` ;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

  })
}
});

