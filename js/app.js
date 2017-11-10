var canvas = document.querySelector('canvas');
// Resizing canvas to the full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// drawing rectangle
// c.fillRect(x,y,width,height)
// where x and y are position
// rectangle color in rgba, .2 determine transperancy
c.fillStyle = 'rgba(255, 0, 0, 0.2)';
c.fillRect(100,100,100,100);
c.fillRect(200,300,100,100);


//lines
c.beginPath();

// c.moveTo(x,y)
// where we are going to start our line
c.moveTo(50,300)
// where we want our line upto
c.lineTo(300,100)

// changing color of the line
c.strokeStyle = 'blue';
// we can't see anuthing until we call stroke method
c.stroke();