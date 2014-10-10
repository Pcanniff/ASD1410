var ui = require("ui");
// Network Function (This is amazing by the way, thank you for opening my eyes to the "Put it all in functions" mentality. So much cleaner.)
var netCheck = function(){
	var url = "http://api.reddit.com/r/space";
	if (Ti.Network.online){
		var client = Ti.Network.createHTTPClient({
			onload: function(evt){
				var data = JSON.parse(this.responseText);
				//console.log(data);
				var pulls = data.data.children;
				var captureArray = [];
				for (i = 0, j = pulls.length; i<j; i++){
					var post = {
						title: pulls[i].data.title,
						link: pulls[i].data.url
					};
					captureArray.push(post);
				}
				ui.builder(captureArray);
			},
			onerror: function(evt){
				alert("Something went wrong. :(");
			}
		});
		client.open("GET", url);
		client.send();
	} else {
		alert("How did you expect to grade this without connecting to the Internet? Please check your connection!");
	};
};
netCheck();
exports.netCheck = netCheck;
