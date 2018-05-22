$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://tpwd.texas.gov/fishboat/fish/action/reptmap.php?EcoRegion=GC') + '&callback=?', function(data){
	//get entire webpage as a single string
	var pageString = JSON.stringify(data);
	
	//Ddelete everything in between the <dl> tags
	var fishingReports = pageString.substring(pageString.lastIndexOf("<dl>")+1,pageString.lastIndexOf("</dl>"));
	
	//erase the non sense; set global search case sensitive
	var cleanUp1 = fishingReports.replace(/class|title|<dt>|=|"|<\/dt>|<dd>|<|>|\\|span|dl|\/dd/gi," ");
	
	//split it at its spans
	var singleReport = cleanUp1.split('span');
	
	//parse it to a single string again
	var cleanRd1 = JSON.stringify(singleReport);
	
	//split it back into an array with just title and fishing report
	var secondReport = cleanUp1.split('r n');
	
	//access the correct elements for port isabel
	var scrapeTitle = secondReport[36];
	var scrapeReport = secondReport[37];
	
	//throw it on the home page
	$("#fishingReport span").html(scrapeReport);
	$(".btnLocation span").html(scrapeTitle);
})	