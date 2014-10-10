var ui = require("ui");
// Network Function (This is amazing by the way, thank you for opening my eyes to the "Put it all in functions" mentality. So much cleaner.)
var netCheck = function() {
	//Storing url to a variable for later use.
	var url = "http://api.reddit.com/r/space";
	if (Ti.Network.online) {
		//Client creation inside a conditional that wil evaluate if I can even access the web.
		var client = Ti.Network.createHTTPClient({
			//onload property pulling that data from the API (through the ("GET", url) when run below.)
			onload : function(evt) {
				// holding that pull in a variable with responseText.
				var data = JSON.parse(this.responseText);
				//console.log(data);
				var pulls = data.data.children;
				// Array to hold my individual post object for use in my UI elements.
				var captureArray = [];
				for ( i = 0,
				j = pulls.length; i < j; i++) {
					var post = {
						title : pulls[i].data.title,
						link : pulls[i].data.url
					};
					captureArray.push(post);
				}
				// THE MAGICAL LINE (or at least what I call this) I had NO idea how you were going to get the data out of this file/function and into the other UI until 
				// I realized that I could just send it as a parameter like this. This is when I went "OOOOOOOOOOOOHHHHHH!!!!!" So thanks! 
				ui.builder(captureArray);
			},
			// My alternate error if for any reason I could not load the page. It will hit that network check alert first though.
			onerror : function(evt) {
				alert("Something went wrong. :(");
			}
		});
		client.open("GET", url);
		client.send();
	} else {
		//Alert if connection can not be made.
		alert("How did you expect to grade this without connecting to the Internet? Please check your connection!");
	};
};
netCheck();
exports.netCheck = netCheck;

