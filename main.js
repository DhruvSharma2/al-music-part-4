song1 = "";
song2 = "";
song1_status = "";
song2_status = "";
scorrightwrist = 0;
scorrightwrist = 0;
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    possNet = ml5.possNet(video,modalLoaded);
    possNet.on('poss',gotPoses);
}
function modalLoaded()
{
    console.log("possNet is initialized");
}
function draw() {
    image(video , 0 , 0 , 600 , 500);
    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();
    fill('#FF0000');
    stroke('#FF0000');
}
function gotPoses(results) 
{
    if (results.length > 0)
    {
        console.log(results);

        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("leftwristX= "+leftwristX+ "leftwristy= "+leftwristY);

        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("rightwristX= "+rightwristX+"rightwristY= "+rightwristY);
    }
}