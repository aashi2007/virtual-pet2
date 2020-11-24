class Food
{
    constructor()
    {
        this.foodStock = createSprite(250, 40, 10, 10);
        this.lastFed = createSprite(10, 10, 20, 20);
        this.foodStock.addImage("Sprites/Milk.png");
    }
    display()
    {
        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image,720, 220, 70, 70);

        if(this.foodStock != 0)
        {
            for(var i = 0; i < this.foodStock; i++)
            {
                if(i%10 == 0)
                {
                    x = 80;
                    y = y+50;
                }
                image(this.image, x, y, 50, 50)
            }
        }
        if ()
    }
    // function to update food Stock and last fed time 
    function feedDog()
    {
        dog.addImage(happyDog);

        foodObj.updateFoodStock(foodObj.getFoodStock()-10);
        database.ref('/').update
        ({
        Food:foodObj.getFoodStock(),
        FeedTime:hour()
      })
   }
   function addFoods()
   {
      foodS++;
      database.ref('/').update
      ({
        Food:foodS
      })
   }
}