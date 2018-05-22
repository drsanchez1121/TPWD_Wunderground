$.ajax({
	//url
	url : "http://api.wunderground.com/api/20c0f8f8a1f3a26a/geolookup/conditions/q/TX/Port_Isabel.json",
	dataType : "jsonp",
	//if successful return the response and store in parsed_json
	success : function(parsed_json) {
	//pull elements from array
	var dateIsabel = moment().calendar();
	var windDirIsabel = parsed_json.current_observation.wind_dir;
	var tempIsabel = parsed_json.current_observation.temp_f;
	var feelsLikeIsabel = parsed_json.current_observation.feelslike_f;
	//var windMphIsabel = parsed_json ['current_observation']['wind_mph'];
	//var windGustIsabel = parsed_json ['current_observation']['wind_gust_mph'];
	var visibilityIsabel = parsed_json.current_observation.visibility_mi;
	var pressureIsabel = parsed_json.current_observation.pressure_in;
	var humidityIsabel = parsed_json.current_observation.relative_humidity;
	var windStringIsabel = parsed_json.current_observation.wind_string;
	var weatherIsabel = parsed_json.current_observation.weather;
	//windIsabel = windMphIsabel + " " + windDirIsabel;
	//set main page values
	$("#dateIsabel").html(dateIsabel);
	$("#tempIsabel").html(tempIsabel);
	$("#feelsLikeIsabel").html(feelsLikeIsabel);
	//$("#windIsabel").html(windIsabel);
	$("#pressureIsabel").html(pressureIsabel);
	//$("#windGustIsabel").html(windGustIsabel);
	$("#visibilityIsabel").html(visibilityIsabel);
	$("#humidityIsabel").html(humidityIsabel);
	$("#windStringIsabel span").html(windStringIsabel);
	$("#weatherIsabel span").html(weatherIsabel);
	
	}
}); 

$.ajax({
	//URL for port isabel
	url : "http://api.wunderground.com/api/20c0f8f8a1f3a26a/tide/q/TX/Port_Isabel.json",
	dataType : "jsonp",
	success : function(parsed_json) {
	//count all summaries
	var tideSummaryCount = parsed_json.tide.tideSummary;
	//Leave len = tideSummaryCount.length to get all the data and not limit to 10 even though its not doing anything
	//loop it till it reaches 10
	for (var i = 0, len = tideSummaryCount.length; i < 10; ++i) {
		//get all conditions and increment i
		var portIsabelTideCondition = parsed_json.tide.tideSummary[i].data.type;
		//same
		var portIsabelTideDate = parsed_json.tide.tideSummary[i].date.pretty;
		//filter out everything except high tide, low tide, sunrise, sunset then color the row and show it
		if(portIsabelTideCondition == "Low Tide"){
			$("#appendIsabel").append("<tr id="+i+" class='table-warning'><td>"+portIsabelTideCondition+"</td><td id="+i+" class='tideDate'>"+portIsabelTideDate+"</td></tr>");
		} else if(portIsabelTideCondition == "High Tide") {
			$("#appendIsabel").append("<tr id="+i+" class='table-info'><td>"+portIsabelTideCondition+"</td><td id="+i+" class='tideDate'>"+portIsabelTideDate+"</td></tr>");
		} else if(portIsabelTideCondition == "Sunrise") {
			$("#appendIsabel").append("<tr id="+i+" class='table-success'><td>"+portIsabelTideCondition+"</td><td id="+i+" class='tideDate'>"+portIsabelTideDate+"</td></tr>");
		} else if(portIsabelTideCondition == "Sunset") {
			$("#appendIsabel").append("<tr id="+i+" class='table-danger'><td>"+portIsabelTideCondition+"</td><td id="+i+" class='tideDate'>"+portIsabelTideDate+"</td></tr>");
		}
	}
	}
});

//tab stuff in testing
$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

