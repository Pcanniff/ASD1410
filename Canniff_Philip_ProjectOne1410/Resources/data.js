// Dot Notation
var Falcon9 = new Object();
Falcon9.title = "Falcon 9";
Falcon9.top = "90dp";
Falcon9.payload = 28990;
Falcon9.mass = 1115200;
Falcon9.average = function() {
	average = this.payload / this.mass;
	average = average.toFixed(3);
	return average;
}, Falcon9.content = function() {
	alert("The " + this.title + " supports " + average + "lbs into low earth orbit for every pound it weighs!");
};

var Grasshopper = new Object();
Grasshopper.title = "Grasshopper";
Grasshopper.top = "190dp";
Grasshopper.payload = 2390; //Test Vehicle with no actual standard. Used false, but estimated data.
Grasshopper.mass = 115200; //Test Vehicle with no actual standard. Used false, but estimated data.
Grasshopper.average = function() {
	average = this.payload / this.mass;
	average = average.toFixed(3);
	return average;
}, Grasshopper.content = function() {
	alert("The " + this.title + " supports " + average + "lbs into low earth orbit for every pound it weighs!");
};

var Falcon5 = new Object();
Falcon5.title = "Falcon 5";
Falcon5.top = "290dp";
Falcon5.payload = 9039;
Falcon5.mass = 340000;
Falcon5.average = function() {
	average = this.payload / this.mass;
	average = average.toFixed(3);
	return average;
}, Falcon5.content = function() {
	alert("The " + this.title + " supports " + average + "lbs into low earth orbit for every pound it weighs!");
};
var FalconHeavy = new Object();
FalconHeavy.title = "Falcon Heavy";
FalconHeavy.top = "390dp";
FalconHeavy.payload = 117000;
FalconHeavy.mass = 3225001;
FalconHeavy.average = function() {
	average = this.payload / this.mass;
	average = average.toFixed(3);
	return average;
}, FalconHeavy.content = function() {
	alert("The " + this.title + " supports " + average + "lbs into low earth orbit for every pound it weighs!");
};

var Falcon1e = new Object();
Falcon1e.title = "Falcon 1e";
Falcon1e.top = "490dp";
Falcon1e.payload = 2230;
Falcon1e.mass = 103090;
Falcon1e.average = function() {
	average = this.payload / this.mass;
	average = average.toFixed(3);
	return average;
}, Falcon1e.content = function() {
	alert("The " + this.title + " supports " + average + "lbs into low earth orbit for every pound it weighs!");
};

// Literal Notation
var myData = [{
	title : "Atlantis",
	top : "90dp",
	missions : 33,
	orbits : 4848,
	average : function() {
		average = this.orbits / this.missions;
		average = average.toFixed(2);
		return average;
	},
	content : function() {
		alert(this.title + " shuttle orbited the Earth on average " + average + " times per mission.");
	},
}, {
	title : "Challenger",
	top : "190dp",
	missions : 10,
	orbits : 995,
	average : function() {
		average = this.orbits / this.missions;
		average = average.toFixed(2);
		return average;
	},
	content : function() {
		alert(this.title + " shuttle orbited the Earth on average " + average + " times per mission.");
	},
}, {
	title : "Columbia",
	top : "290dp",
	missions : 28,
	orbits : 4808,
	average : function() {
		average = this.orbits / this.missions;
		average = average.toFixed(2);
		return average;
	},
	content : function() {
		alert(this.title + " shuttle orbited the Earth on average " + average + " times per mission.");
	},
}, {
	title : "Endeavor",
	top : "390dp",
	missions : 25,
	orbits : 4671,
	average : function() {
		average = this.orbits / this.missions;
		average = average.toFixed(2);
		return average;
	},
	content : function() {
		alert(this.title + " shuttle orbited the Earth on average " + average + " times per mission.");
	},
}, {
	title : "Discovery",
	top : "490dp",
	missions : 39,
	orbits : 5830,
	average : function() {
		average = this.orbits / this.missions;
		average = average.toFixed(2);
		return average;
	},
	content : function() {
		alert(this.title + " shuttle orbited the Earth on average " + average + " times per mission.");
	},
}, Falcon9, Grasshopper, Falcon5, FalconHeavy, Falcon1e];
console.log(myData[0].title);
module.exports = myData;