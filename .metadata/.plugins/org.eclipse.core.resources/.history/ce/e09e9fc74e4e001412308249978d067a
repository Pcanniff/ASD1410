// Modularization 
loadFile = require("data");

//Window
var mainWin = Ti.UI.createWindow({
	backgroundColor : "#333",
	fullscreen : true,
});

//Label Creation
var header = Ti.UI.createLabel({
	text : "Shuttle and Rocket Data",
	color: "#fff",
	font: {
		fontFamily: "Helvetica",
		fontSize: "28dp",
	},
	top : "35dp",

});

//Button Creation depening on data from Objects
for ( i = 0; i < loadFile.length; i++) {
	if (i <= 4) {
		var button = Ti.UI.createButton({
			bottom : loadFile[i].top,
			left : "10dp",
			height : "8%",
			width : "45%",
			title : loadFile[i].title,
			grab : loadFile[i],
			font : {
				fontFamily : "Helvetica",
				fontSize : "16",
			},
			backgroundColor : "#000",
			borderRadius: "8dp"

		});

	} else {
		var button = Ti.UI.createButton({
			bottom : loadFile[i].top,
			right : "10dp",
			height : "8%",
			width : "45%",
			title : loadFile[i].title,
			grab : loadFile[i],
			font : {
				fontFamily : "Helvetica",
				fontSize : "16",
			},
			backgroundColor : "#000",
			borderRadius: "8dp"

		});

	}
	//Event Listener
	button.addEventListener('click', function(evt) {
		evt.source.grab.average();
		evt.source.grab.content();
	});
	mainWin.add(button);
};

//Window Open and Additions
mainWin.add(header);
mainWin.open();