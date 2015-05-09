// Docs at http://simpleweatherjs.com
var forecast='';
var forecast_html='', forecast_headers='<tr>', forecast_cells='<tr>';
$(document).ready(function() {
  $.simpleWeather({
    location: 'Yogyakarta, ID',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
      forecast=weather.forecast;

      $("#weather").html(html);

      
      for(var i=0;i<forecast.length;i++){ 
        forecast_headers += '<th>'+forecast[i].day+'<th>';
        forecast_cells   += '<td>'+forecast[i].high+'<td>';
      }
      forecast_headers+='</tr>'
      forecast_cells+='</tr>'
      forecast_html = forecast_headers+forecast_cells;
      $('#weather-forecast').html(forecast_html)
    },
    error: function(error) {
      $("#weather").html('<p>' + error + '</p>');
    }
  });
});

