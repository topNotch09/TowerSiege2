const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Pig(700,320,70,70);
    box2 = new Pig(920,320,70,70);
    pig1 = new Pig(810, 350);

    box3 = new Pig(700,240,70,70);
    box4 = new Pig(920,240,70,70);
    pig3 = new Pig(810, 220);


    box5 = new Pig(810,160,70,70);
    box6 = new Pig(700,160,70,70);
    box7 = new Pig(920,160,70,70)
    box8 = new Pig(810,80,70,70);
    box9 = new Pig(700,80,70,70);
    boxX = new Pig(920,80,70,70)

    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    //1.display();

    box3.display();
    box4.display();
    pig3.display();
    //3.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    boxX.display();
    //4.display();
    //5.display();

    bird.display();
    platform.display();
    //6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32)
    slingshot.attach(bird.body);
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}