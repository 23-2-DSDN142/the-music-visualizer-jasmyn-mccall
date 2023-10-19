
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let FirstRun = true 
let Taxi;
angleMode(DEGREES)

function draw_one_frame(words, vocal, drum, bass, other, counter) {

    if ( FirstRun){

        Taxi = loadImage ('taxi body.png');
         FirstRun = false;
        }
          
           
image (Taxi,0,0)
        


    let BGcol = color (240, 227, 189)
let White = color (255)
let Red = color(236,47,59)
let RedD = color (181, 53, 61)
let Orange = color(255,155,90)
let Yellow = color (255,213,142)
let Blue = color (82,179,182)
let BrightYellow = color (247, 202, 40)
let Black = color(0)
let Pink = color (252, 196, 194)

    background(BGcol)

//console.log(counter);
//1850 first shoobababba
//3300

let colTrue = true
let drumMap = map( drum, 0, 100, 0,500)
let VocMap = map( vocal, 0, 100, 0,200)
 
let LerpMapV = map( vocal, 70, 100, 0,1)
let LerpMapD = map( drum, 20, 80, 0,1)
let LerpMapVV = map( vocal, 0, 100, 0,1)

//let RedBounce = map (other, 0,100, 0,20)

let middlecolour = lerpColor( Blue, White, LerpMapV);
let RadColY = lerpColor ( Yellow, BGcol, LerpMapD)
let RadColB = lerpColor ( White, Blue, LerpMapD)
let RedVoc = lerpColor ( RedD, Red, LerpMapVV)


let AcCircleSize = map(vocal,70,100,0,100)
let SmallCircleX = map(other,40 ,100, 200, 0)


// red horn things on the corners 
let RedAcc = map (vocal, 0, 100,0,10)
fill(Red)
noStroke()
function accentRed (vocal,RedAcc,Red,translateX,translateY,rotation) {

    translate(translateX, translateY);
  rotate(rotation);


fill(Red)
beginShape();
vertex(20, 10);
vertex(150+vocal, 70+RedAcc);
vertex(150+vocal, 10-RedAcc);
vertex(20, 10);
endShape(CLOSE);

beginShape();
vertex(10, 10);
vertex(100+vocal, 150+vocal);
vertex(150+vocal, 100+vocal);
vertex(10, 10);
endShape(CLOSE);

beginShape();
vertex(10, 20);
vertex(10-RedAcc, 150+vocal);
vertex(70+RedAcc, 150+vocal);
vertex(10, 20);
endShape(CLOSE);

}

// if (colTrue=== false){
//     RedVoc = color(255)
// }


//radial 
stroke(Yellow)
noFill()
for (let i = 1 ; i <40; i = i +1) {
let Radiate = i*20
stroke(RadColY)
noFill()
    ellipse ( 300, 300, drum+Radiate );

}


//shoobabababa
if(vocal>70&&counter>1850 &&counter<2160){

    noFill()
for (let i = 1 ; i <40; i = i +1) {
let Radiate = i*20
stroke(RadColB)
noFill()
    ellipse ( 300, 300, drum+Radiate );
}

noStroke()
fill(middlecolour)
ellipse(20,20,50+AcCircleSize)
    ellipse(100,300,70+AcCircleSize)
    ellipse(250,20,30+AcCircleSize)
    ellipse(300,400,40+AcCircleSize)
    ellipse(40,550,100+AcCircleSize)
    ellipse(500,100,50+AcCircleSize)
    ellipse(653,50,100+AcCircleSize)
    ellipse(30,572,10+AcCircleSize)
    ellipse(500,572,10+AcCircleSize)
    ellipse(500,372,50+AcCircleSize)
    RedVoc = Pink
 BrightYellow = Yellow
}


if(vocal>70&&counter>3350 &&counter<3660){

    noFill()
for (let i = 1 ; i <40; i = i +1) {
let Radiate = i*20
stroke(RadColB)
noFill()
    ellipse ( 300, 300, drum+Radiate );



}
noStroke()
fill(middlecolour)
// ellipse(20,20,50+AcCircleSize)
// ellipse(100,300,70+AcCircleSize)
// ellipse(250,20,30+AcCircleSize)
// ellipse(300,400,40+AcCircleSize)
// ellipse(40,550,100+AcCircleSize)
// ellipse(500,100,50+AcCircleSize)
// ellipse(653,50,100+AcCircleSize)
// ellipse(30,572,10+AcCircleSize)
// ellipse(500,572,10+AcCircleSize)
// ellipse(500,372,50+AcCircleSize)
RedVoc = Pink
BrightYellow = Yellow

}

if(counter>3350 &&counter<3660){
accentRed(vocal,RedAcc,Red,0,0,0)
accentRed(vocal,RedAcc,Red,600,600,180)
}
if(vocal>70&&counter>4840 &&counter<5200){

    noFill()
 // turn circle blue 
for (let i = 1 ; i <40; i = i +1) {
let Radiate = i*20
stroke(RadColB)
noFill()
    ellipse ( 300, 300, drum+Radiate );
}

// blue things 
noStroke()
fill(middlecolour)
// ellipse(20,20,50+AcCircleSize)
    // ellipse(100,300,70+AcCircleSize)
    // ellipse(250,20,30+AcCircleSize)
    // ellipse(300,400,40+AcCircleSize)
    // ellipse(40,550,100+AcCircleSize)
    // ellipse(500,100,50+AcCircleSize)
    // ellipse(653,50,100+AcCircleSize)
    // ellipse(30,572,10+AcCircleSize)
    // ellipse(500,572,10+AcCircleSize)
    // ellipse(500,372,50+AcCircleSize)
    RedVoc = Pink
 BrightYellow = Yellow

}

if(counter>4840 &&counter<5200){
    accentRed(vocal,RedAcc,Red,600,0,90)
    accentRed(vocal,RedAcc,Red,600,600,180)  
}

if(vocal>70&&counter>6370 &&counter<6550){
    noFill()
    // turn circle blue 
   for (let i = 1 ; i <40; i = i +1) {
   let Radiate = i*20
   stroke(RadColB)
   noFill()
       ellipse ( 300, 300, drum+Radiate );
   }
   
   // blue things 
   noStroke()
   fill(middlecolour)
   ellipse(20,20,50+AcCircleSize)
   ellipse(100,300,70+AcCircleSize)
   ellipse(250,20,30+AcCircleSize)
   ellipse(300,400,40+AcCircleSize)
   ellipse(40,550,100+AcCircleSize)
   ellipse(500,100,50+AcCircleSize)
   ellipse(653,50,100+AcCircleSize)
   ellipse(30,572,10+AcCircleSize)
   ellipse(500,572,10+AcCircleSize)
   ellipse(500,372,50+AcCircleSize)
   RedVoc = Pink
BrightYellow = Yellow
   
   }
   
if(vocal>70&&counter>7100 &&counter<7270){
    noFill()
    // turn circle blue 
   for (let i = 1 ; i <40; i = i +1) {
   let Radiate = i*20
   stroke(RadColB)
   noFill()
       ellipse ( 300, 300, drum+Radiate );
   }
   
   // blue things 
//    noStroke()
//    fill(middlecolour)
//    ellipse(20,20,50+AcCircleSize)
//    ellipse(100,300,70+AcCircleSize)
//    ellipse(250,20,30+AcCircleSize)
//    ellipse(300,400,40+AcCircleSize)
//    ellipse(40,550,100+AcCircleSize)
//    ellipse(500,100,50+AcCircleSize)
//    ellipse(653,50,100+AcCircleSize)
//    ellipse(30,572,10+AcCircleSize)
//    ellipse(500,572,10+AcCircleSize)
//    ellipse(500,372,50+AcCircleSize)
   RedVoc = Pink
BrightYellow = Yellow
   
   }

 if(counter>7100){
    accentRed(vocal,RedAcc,Red,0,0,0)
    accentRed(vocal,RedAcc,Red,600,0,90)
    accentRed(vocal,RedAcc,Red,600,0,90)
    accentRed(vocal,RedAcc,Red,600,0,90)  
 }
 if(counter>7460){
    noFill()
    // turn circle blue 
   for (let i = 1 ; i <40; i = i +1) {
   let Radiate = i*20
   stroke(RadColB)
   noFill()
       ellipse ( 300, 300, drum+Radiate );
   }
   
   // blue things 
   noStroke()
   fill(middlecolour)
   ellipse(20,20,50+AcCircleSize)
   ellipse(100,300,70+AcCircleSize)
   ellipse(250,20,30+AcCircleSize)
   ellipse(300,400,40+AcCircleSize)
   ellipse(40,550,100+AcCircleSize)
   ellipse(500,100,50+AcCircleSize)
   ellipse(653,50,100+AcCircleSize)
   ellipse(30,572,10+AcCircleSize)
   ellipse(500,572,10+AcCircleSize)
   ellipse(500,372,50+AcCircleSize)
   RedVoc = Pink
BrightYellow = Yellow
   
   }










//red circle 
if(counter>= 670){
fill(RedVoc)
ellipse(300,300,10+VocMap)
}
//orange centre circles and red centre
fill(Orange)
noStroke()
if(counter>= 340){

    //red circle 
    ellipse(300,100+SmallCircleX,50)


}
if(counter>= 380){
    ellipse(450-SmallCircleX,150+SmallCircleX,50)
}
if(counter>= 420){
    ellipse(500-SmallCircleX,300,50)
}
if(counter>= 460){
    ellipse(450-SmallCircleX,450-SmallCircleX,50)
}
if(counter>= 500){
    ellipse(300,500-SmallCircleX,50)
}
if(counter>= 540){
    ellipse(150+SmallCircleX,450-SmallCircleX,50)
}
if(counter>= 580){
    ellipse(100+SmallCircleX,300,50)
}
 if(counter>= 620){
    ellipse(150+SmallCircleX,150+SmallCircleX,50)
}





// accentRed(vocal,RedAcc,Red,0,0,0)
// accentRed(vocal,RedAcc,Red,600,0,90)
// accentRed(vocal,RedAcc,Red,600,0,90)
// accentRed(vocal,RedAcc,Red,600,0,90)

let BassMap = map(bass, 0,100, 0,200)

function circlecircle (BrightYellow, translateX, translateY,){


    translate (translateX, translateY)
for (let i = 1 ; i < 40; i = i +1) {
    let Spacing = i*1
    fill(BrightYellow)
    rotate(10)
    ellipse(180,30+BassMap,20)
}
}

circlecircle ( BrightYellow,300,300, )


console.log (counter)
}



  