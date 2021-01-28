var hr,sc,mn;


function setup() {
  createCanvas(800,500);
  angleMode(DEGREES);
  
}

function draw() {
  background(0);  
  fill(255,0,0);
  textSize(30)
  text("Seconds hand",400,100);
  fill(0,255,0);
  text("Minutes hand",400,150);
  fill(0,0,255);
  text("Hours hand",400,200);
  textSize(40)
  fill("white");
  text("IST Time",400,400)


  hr =hour();
  mn = minute();
  sc = second();
  translate(200,200);
  rotate(-90);
  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  //sec hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,120,0);
  pop();

  //min hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  //hour hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  //sec arc
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle)
  
  //minarc
  strokeWeight(10);
  noFill();
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle)

  //hourarc
  strokeWeight(10);
  noFill();
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle)
  drawSprites();
}