var canvas = document.querySelector('canvas');
// Resizing canvas to the full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// // drawing rectangle
// // c.fillRect(x,y,width,height)
// // where x and y are position
// // rectangle color in rgba, .2 determine transperancy
// c.fillStyle = 'rgba(255, 0, 0, 0.2)';
// c.fillRect(100,100,100,100);
// c.fillRect(200,300,100,100);


// //lines
// c.beginPath();

// // c.moveTo(x,y)
// // where we are going to start our line
// c.moveTo(50,300)
// // where we want our line upto
// c.lineTo(300,100)

// // changing color of the line
// c.strokeStyle = 'blue';
// // we can't see anuthing until we call stroke method
// c.stroke();


// arc/circle

// // c.arc(x,y,r,start angle, end angle, draw counter clockwise?)
// // c.beginPath(); is important before drawing new shape
// // other wise it will use old earlier c.beginPath() method
// // and will create a line that connected to the circle 
// c.beginPath();
// c.arc(300,300,30,0,6.28319,false);
// c.strokeStyle = 'blue';
// c.stroke();

// // to create more than one circle
// for (var i = 0; i < 5; i++) {
// 	// to place different circle in different position
// 	x = Math.random() * window.innerWidth;
// 	y = Math.random() * window.innerHeight;
// 	c.beginPath();
// 	c.arc(x,y,30,0,6.28319,false);
// 	c.strokeStyle = 'blue';
// 	c.stroke();
// }

// animating a circle
// to make more than one circle with 
// different values the Circle object is made
function Circle(x, y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,6.28319,false);
		c.strokeStyle = 'blue';
		c.stroke();
	}

	this.update = function(){
		// we are calling it to draw first and then move around
		this.draw();
		// to make the circle bounce from the right wall
		// radius is added or sub to the x position because x is lies in
		// the center of the circle and it bounces off the 
		// center of the circle.
		if ((this.x + radius)> window.innerWidth || (this.x - radius)< 0){
			this.dx = -this.dx;
		}

		if ((this.y + radius)> window.innerHeight || (this.y - radius)< 0){
			this.dy = -this.dy;
		}
		// by increamenting x value we made the circle move
		// along x axis at dx velocity it can be positive 
		// or negetive for directions.
		this.x += this.dx;
		this.y += this.dy;
	}
}

// to store all our circle
var circleArray = [];

for (var i = 0; i < 100; i++) {
	// randomized values for each circle
	var x =Math.random() * (window.innerWidth - radius*2) + radius;
	var dx = (Math.random()-0.5); // to change the velocity of the circle
	var y = Math.random() * (window.innerHeight - radius*2) + radius;
	var dy = (Math.random()-0.5);
	var radius = 30; //this is the circle radius

	// pushing each newly created circle in the array
	circleArray.push(new Circle(x,y,dx,dx,radius));
}

/* ************** FOR ONE CIRCLE ONLY ******************
var x =Math.random() * window.innerWidth;
var dx = 5; // to change the velocity of the circle
var y = Math.random() * window.innerHeight;
var dy = 5;
var r = 30; //this is the circle radius
*/
function animate(){
	// requestAnimationFrame needs an argument
	// the argument is the function it's placed in
	// this creates a loop 
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);

	// invoking update function from the circle object
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
/* ************* FOR ONE CIRCLE ONLY ******************
	//to avoid making line of lot of circles
	// we need to clear the canvas so that it looks
	// like one circle is moving
	// clearRect() needs four argument first two are 
	// x and y position of the top left corner and
	// rest two for the width and height of the rectanlge
	c.clearRect(0,0,innerWidth,innerHeight);

	c.beginPath();
	c.arc(x,y,r,0,6.28319,false);
	c.strokeStyle = 'blue';
	c.stroke();

	// to make the circle bounce from the right wall
	// r is added or sub to the x position because x is lies in
	// the center of the circle and it bounces off the 
	// center of the circle.
	if ((x + r)> window.innerWidth || (x - r)< 0){
		dx = -dx;
	}

	if ((y + r)> window.innerHeight || (y - r)< 0){
		dy = -dy;
	}
	// by increamenting x value we made the circle move
	// along x axis at dx velocity it can be positive 
	// or negetive for directions.
	x += dx;
	y += dy;
*/

}

animate();
