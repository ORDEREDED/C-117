var nosex=0;
var nosey=0;
function preload(){
clown_nose=loadImage("clown_nose.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotposes);
}
function gotposes(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
}
}
function modelloaded(){
console.log("posenet");
}
function draw(){
image(video, 0,0,300,300);
image(clown_nose, nosex, nosey, 20, 20);
}
function Take_Snapshot(){
save("uioptsad.png");
}
