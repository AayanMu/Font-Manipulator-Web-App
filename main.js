function preload(){

}

function setup(){
video= createCapture(VIDEO);
video.size(550,500);
video.position(100,250)
canvas= createCanvas(550,500);
canvas.position(950,200);

PoseNet = ml5.poseNet(video, modelLoaded);
PoseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model has been loaded");
}

function draw(){
    background("#c5f0ee");
}

function gotPoses(results){
    if(results.length<0){
    console.log(results);
    }
}