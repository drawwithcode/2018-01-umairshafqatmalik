function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch

}

function draw() {
	background(204);

	strokeWeight(2);
	stroke(170);



//left arm
fill(255,255,255);
quad(150,390, 310,290, 190,430, 140,430);

noStroke();
fill(0,0,255);
rect(145, 210, 30, 90, 10, 0, 0, 10);

strokeWeight(2);
stroke(170);
fill(255,255,255);
rect(155, 300, 20, 50);

noStroke();
fill(0,0,255);
rect(145, 350, 40, 40, 10, 10, 10, 10);

strokeWeight(2);
stroke(170);
fill(255,255,255);
quad(150,390, 180,390, 190,430, 140,430);




//right arm
fill(255,255,255);
quad(190,290, 350,390, 360,430, 310,430);

noStroke();
fill(0,0,255);
rect(325, 210, 30, 90, 0, 10, 10, 0);

strokeWeight(2);
stroke(170);
fill(255,255,255);
rect(325, 300, 20, 50);

noStroke();
fill(0,0,255);
rect(315, 350, 40, 40, 10, 10, 10, 10);

strokeWeight(2);
stroke(170);
fill(255,255,255);
quad(320,390, 350,390, 360,430, 310,430);

	//Body

	//fill....
	noStroke();
	fill(255,255,255);
	beginShape();
	vertex(175, 180);
	vertex(325, 180);
	vertex(325, 370);
	vertex(315, 390);
	vertex(185, 390);
	vertex(175,370);
	endShape(CLOSE);

//stroke...
	strokeWeight(2);
	stroke(170);
	arc(250, 180, 150, 175, PI,0);
	arc(250, 180, 150, 20, PI,0);
	arc(250, 185, 150, 20, PI,0);
	arc(250, 200, 150, 20, PI,0);
	arc(250, 370, 150, 20, 0, PI);
	arc(250, 390, 130, 20, 0, PI);
	line(175,180,175,370);
	line(325,180,325,370);
	line(175,370,185,390);
	line(325,370,315,390);

//head

fill(0,0,255);
noStroke();
quad(230,105, 270,105, 265,130, 235,130);
rect(190, 144, 15, 25, 5,5,5,5);
rect(210, 138, 22, 25);
rect(237, 135, 12, 25, 5,5,5,5);
rect(254, 135, 20, 25, 5,5,5,5);

fill(255,0,0);
ellipse(264,147.5,12,12);

fill(0,0,255);
rect(300, 144, 15, 25, 5,5,5,5);


strokeWeight(2);
stroke(125);
fill(255,255,255);
ellipse(285,152,16,18);
fill(255,255,255);
ellipse(294,149,13,13);

noStroke();
fill(50,50,50);
ellipse(250,115,15,15);
ellipse(240,125,5,5);
ellipse(260,125,5,5);




}
