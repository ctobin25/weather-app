

$(document).ready(function() {

    var API_KEY = 'ef2f2f4387eaa4acb7befe9698fe58fb'


  $("#add-city").on("click", function(event) {

    event.preventDefault();
   
    var inputCity = $("#city-input").val().trim();

  
    cityView.empty()
    searchCity(inputCity);
    fiveDay(inputCity);
  });

  var curday = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };

    console.log(curday('/'));

    var date = curday('/');

    var cityView = $("#city-view")

    var foreCastView = $("#forecast-view")


    function fiveDay(cityName){
      var queryFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + API_KEY;
      $.ajax({
        url: queryFiveDay,
        method: "GET"
      }).then(function(response) {
        console.log("forecast",response)
          for (let i = 0; i < response.list.length; i++) {
            console.log('heree',response.list[i])

            
           const element = response.list[index];


            console.log('date',response.list[i].dt_txt)

            if (response.list[i].dt_txt.indexOf("03:00:00") !== -1) {
              console.log('correct time',response.list[i].dt_txt)
              
              var temp = $("<p>").text("Temperature: " + response.list[i].main.temp);
              var humidity = $("<p>").text("Humidity: " + response.main.humidity);
              var wind = $("<p>").text("Wind Speed: " + response.wind.speed);
              
              foreCastView.append(temp,humidity,wind) //append rest of things thsat need to go in five day card!

            }
           

   
            
          }
         var fiveDay = new forecast();


      })





    }




  function searchCity(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var today = new Date();
      console.log(today);
      console.log(response);

      
      var cityName = $("<p>").text("City: " + response.name);
      var icon = $('<img src="http://openweathermap.org/img/wn/' + response.weather[0].icon + '.png" alt="Weather Icon">');
      //var icon = $(`<img src="http://openweathermap.org/img/wn/${response.weather[0].icon}.png alt="Weather Icon">`);
      var displayDate = $("<p>").text("Date: " + date);
      var temp = $("<p>").text("Temperature: " + response.main.temp);
      var humidity = $("<p>").text("Humidity: " + response.main.humidity);
      var wind = $("<p>").text("Wind Speed: " + response.wind.speed);


     cityView.append(icon,cityName,displayDate,temp, humidity,wind)

     uvIndex(response.coord.lat, response.coord.lon)



    });
  }

  function uvIndex(lat,lon){
    var queryURL = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${API_KEY}` ;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var uv = $('<p>').text("UV Index: ");
     // uv.addClass("bg-danger")
      var uvResponse = $('<span>').text(response.value);
     
      if (response.value < 3) {
        //good
        uvResponse.addClass("bg-success")
      } else if (response.value > 5){
          //high
          uvResponse.addClass("bg-danger")
      } else  {
        //moderate
        uvResponse.addClass("bg-warning")
      }
      uv.append(uvResponse)
      console.log(response.value)
      cityView.append(uv)

     // return response.value
  })

}
});

