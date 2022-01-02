song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
   song1 = loadSound("HP(R).mp3");
   song2 = loadSound("TBU.mp3");
}
function setup()
{
   canvas = Canvas(800,600);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
   PoseNet = ml5.poseNet(video, modelLoaded);
   PoseNet.on('pose',gotPoses);
}
function modelLoaded()
{
   console.log("PoseNet is initialized");
}
function gotPoses(results)
{
   if(results>0)
   {
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      console.log("LeftWristX = " + leftWristX + " ; " + " LeftWristY = " + leftWristY);

      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("RightWristX = " + rightWristX  + " ; " + " RightWristY = " + rightWristY);
   }
}
function draw()
{
    image(video,0,0,800,600);
}

