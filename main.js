var canvas= new fabric.Canvas('myCanvas');

player_x= 10;
player_y= 10;

blockWidth= 30;
blockHeight=30;

player="";
object="";

function playerupdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player=Img;

        player.scaleToWidth(125);
        player.scaleToHeight(110);
        player.set({
            top:player_y, 
            left:player_x
        });
        
        canvas.add(player);

    });
}

function objectupdate(getImg){
    fabric.Image.fromURL(getImg, function(Img){
        object=Img;

        object.scaleToWidth(blockWidth);
        object.scaleToHeight(blockHeight);
        object.set({
            top:player_y, 
            left:player_x
        });
        
        canvas.add(object);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed=='80'){
     blockWidth=blockWidth+10;
     blockHeight=blockHeight+10;
     document.getElementById("widthspan").innerHTML=blockWidth;
     document.getElementById("heightspan").innerHTML=blockHeight;
    }

    if(e.shiftKey==true && keyPressed=='77'){
        blockWidth=blockWidth-10;
        blockHeight=blockHeight-10;
        document.getElementById("widthspan").innerHTML=blockWidth;
        document.getElementById("heightspan").innerHTML=blockHeight;
    }

       if(keyPressed=='87')
       {
           objectupdate('wall.jpg');
           console.log('w');
       }

       if(keyPressed=='84')
       {
           objectupdate('trunk.jpg');
           console.log('t');
       }

       if(keyPressed=='68')
       {
           objectupdate('dark_green.png');
           console.log('d');
       }

       if(keyPressed=='76')
       {
           objectupdate('light_green.png');
           console.log('l');
       }

       if(keyPressed=='89')
       {
           objectupdate('yellow_wall.png');
           console.log('y');
       }

       if(keyPressed=='82')
       {
           objectupdate('roof.jpg');
           console.log('r');
       }

       if(keyPressed=='67')
       {
           objectupdate('cloud.jpg');
           console.log('c');
       }

       if(keyPressed=='71')
       {
           objectupdate('ground.png');
           console.log('g');
       }

       if(keyPressed=='85')
       {
           objectupdate('unique.png');
           console.log('u');
       }

       if(keyPressed == "37")
       {
           left();
           console.log("left");
       }

       if(keyPressed == "38")
       {
           up();
           console.log("up");
       }

       if(keyPressed == "39")
       {
           right();
           console.log("right");
       }

       if(keyPressed == "40")
       {
           down();
           console.log("down");
       }
}

function up()
{
    if(player_y>=0)
    {
        player_y=player_y-blockHeight;
        canvas.remove(player);
        playerupdate();
    }
}

function down()
{
    if(player_y<=550)
    {
        player_y=player_y+blockHeight;
        canvas.remove(player);
        playerupdate();
    }
}

function left()
{
    if(player_x>=0)
    {
        player_x=player_x-blockWidth;
        canvas.remove(player);
        playerupdate();
    }
}

function right()
{
    if(player_x<=950)
    {
        player_x=player_x+blockWidth;
        canvas.remove(player);
        playerupdate();
    }
}