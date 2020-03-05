

     function hey(){
        document.getElementById("forms").style.display='none';
        document.body.style.backgroundImage = 'none';
        document.getElementById("canvas").style.display='block'; 
        start();
     }

    
function start(){
var name = document.getElementsByName("username")[0].value;
var number = document.getElementsByName("numbers")[0].value;
var bgColor = document.getElementsByName("bgcolor")[0].value;
var txColor = document.getElementsByName("txcolor")[0].value;

        var c = document.getElementById("testCanvas");
        var ctx =c.getContext("2d");
        var timer;
            
                         
             function startAnimation() {
                  timer = setInterval(draw, 1000);               
                  drawCircle();
             }
        
    function drawCircle(){  

             for(var i=0; i< number/2; i++){            
            ctx.fillStyle = 'rgba(0,'+Math.random()*255 +','+ Math.random()*255 +','+0.4+')';
            ctx.beginPath();        
            ctx.arc(Math.random()*320,Math.random()*100,10,0,Math.PI*2);
            ctx.fill();        
 }     
                   
             for(i=0; i< number/2; i++){             
            ctx.fillStyle = 'rgba(0,'+Math.random()*255 +','+ Math.random()*255 +','+0.4+')';
            ctx.beginPath();
            ctx.arc(Math.random()*320,Math.random()*120 + 350,10,0,Math.PI*2);
            ctx.fill();          
}        
             }
        
        function draw(){
           
             c.style.backgroundColor = bgColor;
             ctx.fillStyle='rgb('+Math.random()*255+','+Math.random()*255 +','+'0)';
             ctx.font ="30px Arial";
             ctx.fillText("Happy Birthday",60,200);
             ctx.fillStyle = txColor;
             ctx.fillText(name,80,260);
                      
          var x =0;
            for(var j=0; j<=7; j++){
                ctx.beginPath();
                ctx.moveTo(0,x);
                ctx.lineTo(30,x+30);
                ctx.lineTo(0,x+60)
                x+=60;
                ctx.closePath();      
                ctx.fill(); 
                ctx.fillStyle = 'rgb(0,'+Math.random()*255 +','+ Math.random()*255 +')';
            }
            
            x =0;
            for( j=0; j<=7; j++){
                ctx.beginPath();
                ctx.moveTo(320,x);
                ctx.lineTo(290,x+30);
                ctx.lineTo(320,x+60)
                x+=60;
                ctx.closePath(); 
                 ctx.fill(); 
                ctx.fillStyle = 'rgb(0,'+Math.random()*255 +','+ Math.random()*255 +')';
            }
            
            
            // draw circle
             x =0;
            for(j=0; j<=7; j++){
                ctx.beginPath();
                ctx.arc(285, x+30, 5,0,Math.PI*2);
                x+=60;
                ctx.fill(); 
                ctx.fillStyle = 'rgb('+Math.random()*255+',0'+','+ Math.random()*255 +')';
            }
            x =0;
            for(j=0; j<=7; j++){
                ctx.beginPath();
                ctx.arc(35, x+30, 5,0,Math.PI*2);
                x+=60;
                ctx.fill(); 
                ctx.fillStyle = 'rgb('+Math.random()*255+','+Math.random()*255 +','+ Math.random()*255 +')';
            }

        }
             
             startAnimation();
}
 











