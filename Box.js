class Box
{
   constructor(x, y, width, height)
   {
       var option =
       {
           restitution:0.8, 
           friction:0.3,
           density:1.0
       }
       this.body=Bodies.rectangle(x, y, width, height, option);
       World.add(world, this.body);
       this.width=width;
       this.height=height
   }
   display()
   {
       rect(this.body.position.x, this.body.position.y, this.width, this.height)
   }
}