// Variables!
var radius = 15;
var x = 50;
var y =150;

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");

// I would add more variables for x, y, radius, and color

var color = "red"
var iflift = false

//Listeners!!
//Add a listener for loading the window
//Add a listener for the color picker
//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)

window.addEventListener('load', function(){
	canvas.setAttribute("width", document.documentElement.clientWidth*0.75);
	canvas.setAttribute("height", document.documentElement.clientHeight*0.75);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
})

window.addEventListener('resize', function(){
	canvas.setAttribute("width", document.documentElement.clientWidth*0.75);
	canvas.setAttribute("height", document.documentElement.clientHeight*0.75);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
})

canvas.addEventListener('mousemove', function(e){
	console.log(this);
	console.log(e);
	x = e.clientX;
	y = e.clientY;
	if (!iflift) {
		draw()
	}
})

//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	console.log(this);
	console.log(e);
	var x = e.key;
	console.log(x)
	if (x=='b' || x=='Y'){
		color = "blue";
	}
	else if (x=='y' || x=='Y' ){
		color = "yellow";
	}
	else if (x=='r' || x=='R'){
		color = "red";
	}
	else if (x=='g' || x=='G'){
		color = "green";
	}
	else if (x==' '){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
	else if (x=='ArrowUp'){
		iflift = true;
	}
	else if (x=='ArrowDown'){
		iflift = false;
	}
})

document.querySelector("input").addEventListener("input", function() {
    //color=document.querySelector("input").value;
	color = this.value;
});

// Functions!
// I would add a function for draw
function draw(){
	console.log("I am going to draw!!");
	//CHECK OUT beginPath()
	ctx.beginPath();
	ctx.fillStyle=""+color+"";
	ctx.arc(x, y, 5, 0, 2 * Math.PI);
	ctx.fill();
}



