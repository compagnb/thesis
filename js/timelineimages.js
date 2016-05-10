var emotionPic;
var canvas = document.querySelector('chart'),
    ctx    = canvas.getContext('2d');
    fitToContainer(canvas);

ctx.fillStyle='yellow';
for (var i=0;i<5;++i) ctx.fillRect(i*18+2,2,16,16);

function fitToContainer(canvas){
  canvas.style.width='100%';
  canvas.style.height='100%';
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}


function setup() {
  emotionPic = createDiv('this is some text');
}

function draw() {

}
function mouseMoved() {

}
