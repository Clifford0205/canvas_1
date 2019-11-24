

var canvas=document.querySelector('canvas');
var body =document.querySelector('body');

canvas.height=window.innerHeight;
canvas.width=document.documentElement.clientWidth;
//canvas.width=body.clientWidth; //也是正確
// canvas.width=window.innerWidth;//錯誤 會包含滾動軸


console.log(body.clientWidth);

var c=canvas.getContext('2d');

// c.fillStyle='rgba(255,0,0,0.5)';
// c.fillRect(100,100,100,100);
// c.fillStyle='rgba(0,255,0,0.5)';
// c.fillRect(400,100,100,100);
// c.fillStyle='rgba(0,0,255,0.5)';
// c.fillRect(300,300,100,100);
  

console.log(canvas)

//Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle="#fa34a3";
// c.stroke();


// arc circle
// c.beginPath();
// c.arc(300,300,80,Math.PI*2,false);
// c.stroke();


// for(var i=0;i<100;i++){
//     var x=Math.random()*window.innerWidth;
//     var y=Math.random()*window.innerHeight;
//     c.beginPath();
//     let r= Math.floor(Math.random()*255);
//     let g= Math.floor(Math.random()*255);
//     let b= Math.floor(Math.random()*255);
//     // c.strokeStyle="blue";
//     c.strokeStyle=`rgba(${r},${g},${b})`;
//     c.arc(x,y,80,Math.PI*2,false);
//     c.stroke();
// }


//單顆球球彈跳
// var x= 200;
// var y=200;
// var dx=4;
// var dy=4;
// var radius=30;

// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth,innerHeight);
//     c.beginPath();
//     c.arc(x,y,radius,0,Math.PI*2,false);
//     c.strokeStyle='blue';
//     c.stroke();

//     if(x+radius>canvas.width||x-radius<0){
//         dx=-dx;
//     }

//     if(y+radius>innerHeight||y-radius<0){
//         dy=-dy;
//     }
    
//     x +=dx;
//     y +=dy;
// }

// animate()




//一顆球球彈跳 物件導向做法

// var x= Math.random()*innerWidth;
// var y=Math.random()*innerHeight;
// var dx=(Math.random()-0.5)*8;
// var dy=(Math.random()-0.5)*8;
// var radius=30;


// function Circle(x,y,dx,dy,radius){
//     this.x=x;
//     this.y=y;
//     this.dx=dx;
//     this.dy=dy;
//     this.radius=radius;

//     this.draw=function(){
//         c.beginPath();
//         c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
//         c.strokeStyle='blue';
//         c.stroke();
//     }

//     this.update=function(){
//         if(this.x+this.radius>canvas.width||this.x-this.radius<0){
//             this.dx=-this.dx
//         }
//         if(this.y+this.radius>innerHeight||this.y-this.radius<0){
//             this.dy=-this.dy
//         }

//         this.x +=this.dx;
//         this.y +=this.dy;

//         this.draw();
//     }
// }

// var circle=new Circle(200,200,3,3,30)



// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth,innerHeight);
//     circle.update();
   
// }

// animate()



// 數顆球球彈跳 物件導向做法
// function Circle(x,y,dx,dy,radius){
//     this.x=x;
//     this.y=y;
//     this.dx=dx;
//     this.dy=dy;
//     this.radius=radius;

//     this.draw=function(){
//         c.beginPath();
//         c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
//         c.strokeStyle='blue';
//         c.stroke();
//         c.fill();
//     }

//     this.update=function(){
//         if(this.x+this.radius>canvas.width||this.x-this.radius<0){
//             this.dx=-this.dx;
//         }
//         if(this.y+this.radius>innerHeight||this.y-this.radius<0){
//             this.dy=-this.dy;
//         }

//         this.x +=this.dx;
//         this.y +=this.dy;

//         this.draw();
//     }
// }



// var circleArray=[];

// for(var i=0;i<100;i++){
//     var radius=30;
//     var x= Math.random()*(innerWidth-radius*2)+radius;
//     var y=Math.random()*(innerHeight-radius*2)+radius;
//     var dx=(Math.random()-0.5);
//     var dy=(Math.random()-0.5);
//     circleArray.push(new Circle(x,y,dx,dy,radius));
// }

// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0,0,innerWidth,innerHeight);
//     for(var i=0;i<circleArray.length;i++){
//         circleArray[i].update();
//     }
   
// }

// animate();



// 數顆球球彈跳 物件導向做法 加上事件
var mouse={
    x:null,
    y:null
};

var maxRadius=40;
// var minRadius=2;

var colorArray=[
    "#188D90",
    "#50C2B4",
    "#B5F6FA",
    "#F9A17D",
    "#FF442C",
]

window.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
});

window.addEventListener('resize',function(){
    canvas.height=window.innerHeight;
    canvas.width=document.documentElement.clientWidth;

    init();
})
function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.minRadius=radius;
    this.color=colorArray[Math.floor(Math.random()*colorArray.length)]

    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        // c.strokeStyle='blue';
        // c.stroke();
        c.fillStyle=this.color;
        c.fill();
    }

    this.update=function(){
        if(this.x+this.radius>canvas.width||this.x-this.radius<0){
            this.dx=-this.dx;
        }
        if(this.y+this.radius>innerHeight||this.y-this.radius<0){
            this.dy=-this.dy;
        }

        this.x +=this.dx;
        this.y +=this.dy;

        //互動
        if(mouse.x-this.x<50&&mouse.x-this.x>-50&&
            mouse.y-this.y<50&&mouse.y-this.y>-50){
                if(this.radius<maxRadius){
                    this.radius +=1;
                }
                
            }
            else if(this.radius>this.minRadius){
                this.radius -=1;
            }

        this.draw();
    }
}



var circleArray=[];

function init(){
    circleArray=[];
    for(var i=0;i<800;i++){
        var radius=Math.random()*3+1;
        var x= Math.random()*(innerWidth-radius*2)+radius;
        var y=Math.random()*(innerHeight-radius*2)+radius;
        var dx=(Math.random()-0.5);
        var dy=(Math.random()-0.5);
        circleArray.push(new Circle(x,y,dx,dy,radius));
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
   
}

init();
animate()



