var builder = function(useable) {
	//Main Window
	var win = Ti.UI.createWindow({
		backgroundColor : "#ccc"
	});
	// Title Label
	var title = Ti.UI.createLabel({
		top : "22dp",
		backgroundColor : "#ccc",
		text : "Updated Space News"
	});
	//Table View
	var tableView = Ti.UI.createTableView({
		top : "54dp",
		data : useable
	});
	//Web Window and View creation
	var webWin = Ti.UI.createWindow({
		backgroundColor : "#ccc"
	});
	var webView = Ti.UI.createWebView({
		top: "22dp",
		url : "",
	});
	//Close Button (Escape from Web View)
	var close = Ti.UI.createButton({
		title : "Close",
		color: "#fff",
		backgroundColor: "#000",
		borderRadius: "10dp",
		height : "6%",
		width : "25%",
		bottom : "5%",
		right : "10%"
	});
	close.addEventListener('click', function() {
		webWin.close();
	});
	tableView.addEventListener('click', function(evt) {
		webView.url = evt.source.link;
		webWin.open();
	});
	// Additions
	webWin.add(webView);
	webView.add(close);
	win.add(title);
	win.add(tableView);
	win.open();
};

exports.builder = builder;
