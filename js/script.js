

   var video;
   var canvas, ctx;
   var angle = 0;

 function init() {
   video = document.getElementById('sourcevid');
   canvas = document.getElementById('myCanvas');
   ctx = canvas.getContext('2d');
   setInterval("processFrame()", 25); // call processFrame each 25ms
 }

 function processFrame() {
    ctx.drawImage(video, 0, 0, 320, 180);
    drawRotatingVideo(480, 90);
    ctx.drawImage(video, 0, 180, 320, 180);
    ctx.drawImage(video, 320, 180, 320, 180);
 }

 function drawRotatingVideo(x, y) {
     // Clear the zone at the top right quarter of the canvas
    ctx.clearRect(320, 0, 320, 180);
    // We are going to change the coordinate system, save the context !
    ctx.save();
    // translate, rotate and recenter the image at its "real" center,
    //not the top left corner
    ctx.translate(x, y);
    ctx.rotate(angle += 0.01); // rotate and increment the current angle
    /*make the image rotate around the center of the rectangle,
    instead of around the top left corner at (0, 0) by default*/
    ctx.translate(-80, -45);
    ctx.drawImage(video, 0, 0, 160, 90);
    // restore the context
    ctx.restore();
 }
