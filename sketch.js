const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    async function getBackgroundImg(){
        var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
        var responsejson= await response.json()
        var datetime= responsejson.datetime
        var hour = datetime.slice(11,13)
        if(hour>=6 ){
           bg="sprites/sunrise1.png"
        }
        if(hour>=7 ){
            bg="sprites/sunrise2.png"
         }
         if(hour>=8 ){
            bg="sprites/sunrise3.png"
         }
         if(hour>=9 && hour<=13  ){
            bg="sprites/sunrise4.png"
         } else
         bg="sprites/sunrise5.png"
         
         if(hour>=16 ){
            bg="sprites/sunrise6.png"
         }
         if(hour>=18 ){
            bg="sprites/sunset7.png"
         }
         if(hour>=19){
            bg="sprites/sunset8.png"
         }
         if(hour>=20 ){
            bg="sprites/sunset9.png"
         }
         if(hour>=21 ){
            bg="sprites/sunset10.png"
         } 
         if(hour>=22 ){
            bg="sprites/sunset11.png"
         }
         if(hour>=23 ){
            bg="sprites/sunset12.png"
         }


        backgroundImg=loadImage(sunrise1.png,sunrise2.png,sunrise3.png,sunrise4.png,sunrise5.png,sunrise6.png,sunset7.png,sunset8.png,sunset9.png,sunset10.png,sunset11.png,sunset12.png)
    }
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
