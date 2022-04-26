const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,ladrillo,ground;
var ladrillo_con;
var ladrillo_con_2;

var bg_img;
var ladrillo_img;

var grua,grua1,grua_img;
var mute_btn;

var fr,rope2;

var bk_song;
var cut_sound;

var rope1, ladrillo_con_3, ladrillo2;

var ladrillos = [];

function preload()
{
  bg_img = loadImage('background.png');
  ladrillo_img = loadImage('brick.png');
  grua_img = loadImage("GHC55.png")

  bk_song = loadSound('sound1.mp3');
  cut_sound = loadSound('rope_cut.mp3');

}

function setup() {
  createCanvas(500,700);

  frameRate(80);

  bk_song.play();
  bk_song.setVolume(0.5);

  engine = Engine.create();
  world = engine.world;
  
  grua = createImg("GHC55.png");
  grua.position(50,100);
  grua.size(100,100);
  grua.mouseClicked(drop);

  grua1 = createImg("GHC55.png");
  grua1.position(350,100);
  grua1.size(100,100);
  grua1.mouseClicked(create);
  
  rope = new Rope(7,{x:245,y:30});
  
  ground = new Ground(200,690,600,20);

  ladrillo = Bodies.rectangle(300,300,50,50);
  //ladrillo2 = Bodies.rectangle(300,350,50,50);

  Matter.Composite.add(rope.body,ladrillo);

  ladrillo_con = new Link(rope,ladrillo);

  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() {
  background(51);
  image(bg_img,0,0,490,690);

  push();
  imageMode(CENTER);

  if(ladrillo!=null){
    image(ladrillo_img,ladrillo.position.x,ladrillo.position.y,70,70);
    //image(ladrillo_img, ladrillo2.position.x, ladrillo2.position.y, 70, 70);
    
  }
  pop();




  rope.show();

  for (var i = 0; i < ladrillos.length; i++) {
    ladrillos[i].show();
    }
  
  
  
  Engine.update(engine);
  ground.show();

  drawSprites();

}

/*function drop()
{
  rope.break();
  ladrillo_con.detach();
  ladrillo_con = null; 
}
*/

function drop()
{

  //ladrillo_con_3 = new Link(rope2, ladrillo2);
  //Matter.Composite.add(rope2.body, ladrillo2);
  ladrillo_con.detach();
   
}

function create()
{
  var ladrillo = new Ladrillo( 300,300,50, 50);
  ladrillos.push(ladrillo);
  ladrillo_con = new Link(rope, ladrillo);
  
 /* for (var i = 0; i < ladrillos.length; i++) {
    ladrillos[i].show();
    }
    */
  
   
}

function mute(){
  if(bk_song.isPlaying()){
    bk_song.stop();
  }
  else{
    bk_song.play();
  }
}