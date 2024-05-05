$(function() {
	$('main').prepend($('<div id="whereistimmer"></div>'));
	$.ajax({
		url: 'https://nytlora.ddns.net/Locator/lastposition.php',
		dataType: 'json',
		method: 'POST',
		crossDomain: true,
		success: function(response) {
			if (!response.data) {
				return;
			}
			var zeitpunkt = new Date(Date.parse(response.data.time));
			var innerhtml = '<time datetime="'+ zeitpunkt.getFullYear() +'-'+ (zeitpunkt.getMonth()+1) +'-'+ zeitpunkt.getDate() +' '+ zeitpunkt.getHours() +':'+ zeitpunkt.getMinutes() +'">Am '+ zeitpunkt.getDate() +'.'+ (zeitpunkt.getMonth()+1) +'.'+ zeitpunkt.getFullYear() +' um '+ zeitpunkt.getHours() +':'+ zeitpunkt.getMinutes() +' Uhr</time>: <a href="https://openstreetmap.org/?mlat='+ response.data.lat +'&mlon='+ response.data.lon +'&zoom=14" target="blank">'+ response.data.lon +' x '+ response.data.lat +'</a>';
			$('#whereistimmer').html(innerhtml);
		}
	});
});

