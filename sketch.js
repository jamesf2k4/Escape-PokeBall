let xPos1 = 150;
let xPos2 = 150;
let xPos3 = 150;
let xPos4 = 150;
let xPos5 = 150;
let direction1 = 5;
let direction2 = 7;
let direction3 = 10;
let direction4 = 7;
let direction5 = 5;
let myXPos = 50;
let myYPos = 250;
let enXPos = 1200;
let enYPos = 500;

let myLeft, myRight, myTop, myBottom; 
let enLeft, enRight, enTop, enBottom; 

let ballLeft1, ballRight1,  ballTop1, ballBottom1; 
let ballLeft2, ballRight2,  ballTop2, ballBottom2;
let ballLeft3, ballRight3,  ballTop3, ballBottom3;
let ballLeft4, ballRight4,  ballTop4, ballBottom4;
let ballLeft5, ballRight5,  ballTop5, ballBottom5;

function setup() {
    createCanvas(1250, 570);
    noStroke();

    rectMode(CENTER);
}

function draw() {
    background(0);

    //  Safe Zone
    fill(0,255,0, 110);
    rect(0,0,200,1250);
    // Safe Zone 2
    fill(0,255,0, 110);
    rect(1200,0,200,1250);
    


    //Enemy  Circle 1
    fill(255,0,0);
    ellipse(xPos1,50,50,50);

    xPos1 += 3 * direction1;

    ballLeft1 = xPos1 - 25;
    ballRight1 = xPos1 + 25;
    ballTop1 = 25;
    ballBottom1 = 75;

    if(xPos1 < 150 || xPos1>1075){
         direction1*= -1;
    }
    
    //Enemy  Circle 2
    fill(255,0,0);
    ellipse(xPos2,175,50,50);

    ballLeft2 = xPos2 - 25;
    ballRight2 = xPos2 + 25;
    ballTop2 = 150;
    ballBottom2 = 200;

    xPos2 += 3 * direction2;

    if(xPos2 < 150 || xPos2>1075){
         direction2*= -1;
    }

    //Enemy  Circle 3
    fill(255,0,0);
    ellipse(xPos3,270,50,50);
    
    ballLeft3 = xPos3 - 25;
    ballRight3 = xPos3 + 25;
    ballTop3 = 245;
    ballBottom3 = 295;

    xPos3 += 3 * direction3;

    if(xPos3 < 150 || xPos3>1075){
         direction3*= -1;
    }
    //Enemy  Circle 4
    fill(255,0,0);
    ellipse(xPos4,400,50,50);

    ballLeft4 = xPos4 - 25;
    ballRight4 = xPos4 + 25;
    ballTop4 = 375;
    ballBottom4 = 425;

    xPos4 += 3 * direction4;

    if(xPos4 < 150 || xPos4>1075){
         direction4*= -1;
    }
    //Enemy  Circle 5
    fill(255,0,0);
    ellipse(xPos5,500,50,50);

    ballLeft5 = xPos5 - 25;
    ballRight5 = xPos5 + 25;
    ballTop5 = 475;
    ballBottom5 = 525;

    xPos5 += 3 * direction5;

    if(xPos5 < 150 || xPos5>1075){
        direction5*= -1;
}

    // blue end goal Box
    fill(0, 0, 255);
    rect(enXPos, enYPos, 50, 50);

    // Player Box
    fill(255);
    rect(myXPos,myYPos,25,25);
    

    if (keyIsDown(LEFT_ARROW)) {
        myXPos -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        myXPos += 5;
    }

    if (keyIsDown(UP_ARROW)) {
        myYPos -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
        myYPos += 5;
    }

    
    
    fill(255)
    textSize(22)
    text("Escape the Pokeball!", 575, 45)
    // Self Collision 

    myLeft = myXPos - 25;
    myRight = myXPos + 25;
    myTop = myYPos - 25;
    myBottom = myYPos + 25;
    
    // Enemy Collision 
    enLeft = enXPos - 25;
    enRight = enXPos + 25;
    enTop = enYPos - 25;
    enBottom = enYPos + 25;

    if (myLeft > enRight || myRight < enLeft || myTop > enBottom || myBottom < enTop){
        fill(255)
        textSize(22)
        text("", 120, 480)
    }
    else{
        fill(random(255),random(255),random(255));
        textSize(22);
        text("You beat the game!", 140, 480);
        rect(myXPos, myYPos, 25, 25);

    }

    if (myLeft > ballRight1 || myRight < ballLeft1 || myTop > ballBottom1 || myBottom < ballTop1) {
        
    }

    else {
       myXPos = 50;
       myYPos = 250; 
    }

    if (myLeft > ballRight2 || myRight < ballLeft2 || myTop > ballBottom2 || myBottom < ballTop2) {
        
    }

    else {
       myXPos = 50;
       myYPos = 250; 
    }
    if (myLeft > ballRight3 || myRight < ballLeft3 || myTop > ballBottom3 || myBottom < ballTop3) {
        
    }

    else {
       myXPos = 50;
       myYPos = 250; 
    }
    if (myLeft > ballRight4 || myRight < ballLeft4 || myTop > ballBottom4 || myBottom < ballTop4) {
        
    }

    else {
       myXPos = 50;
       myYPos = 250; 
    }
    if (myLeft > ballRight5 || myRight < ballLeft5 || myTop > ballBottom5 || myBottom < ballTop5) {
        
    }

    else {
       myXPos = 50;
       myYPos = 250; 
    }


}

