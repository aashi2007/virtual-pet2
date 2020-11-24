//Creating variables here
var dog, dogImg, happydogImg, happydog;
var database;
var foodS, foodStock, foodImg;
var feedB, addFood;
var fedTime, lastFed;
var foodObj;

function preload()
{
  //load images here
  dogImg = loadImage("Sprites/dogImg.png");
  happydogImg = loadImage("Sprites/dogImg1.png");
  foodImg = loadImage("Sprites/Milk.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250, 250);
  dog.addImage(dogImg);
  dog.scale = 0.5;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  fedTime = database.ref('FeedTime');
  fedTime.on("value",function(data)
  {
      lastFed = data.val();

      feed = createButton("Feed the Dog");
      feed.position(700, 95);
      feed.mousePressed(feedDog);
      if(feed.mousePressed)
      {
        dog.x = (250, 200);
        dog.scale = 0.5;
      }

      addFood = createButton("Add Food");
      addFood.position(800, 95);
      addFood.mousePressed(addFoods);
  });
}

function draw() {  
     if(keyWentDown(UP_ARROW))
  {
  background(46, 139, 87);
  
    writeStock(foodS);
    dog.addImage(happydogImg);
    dog.scale = 0.5 ;

    fill(255, 255, 254);
    textSize(15);
    if(lastFed>=12)
     {
       text("Last Feed : "+lastFed%12 + " PM", 350, 50);
     }
     else if(lastFed == 0)
     {
       text("Last Feed : 12 AM", 350, 70);
     }
     else
     {
       text("Last Feed : "+lastFed+ " AM" , 350, 90);
     }
  }
  drawSprites();
  //add styles here
  fill("red");
  text("Note: Press UP_ARROW Key To Feed!", 200, 20);
  //textSize(10);

}
  //Function to read values from database
  function readStock(data)
  {
    foodS = data.val();
  }
 //Function to write values in Database
  function writeStock(x)
  {
    database.ref('/').update
    ({
        Food:x
    })
  }