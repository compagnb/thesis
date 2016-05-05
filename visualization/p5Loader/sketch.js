var x, y, m, old_second, index;
var imageWidth = 64;
var imgNames = ['angry', 'blush', 'confounded', 'confused', 'cry', 'disappointed_relieved','grimacing','grinning', 'hushed', 'neutral_face', 'no_mouth', 'stuck_out_tongue', 'unamused', 'wink', 'worried', 'pizza'];
var path = 'images/';
var ext = '.png';
var count = 0;
var count2 = 0;

var imgArray =[];
var faces = [];
 
function preload() {
  for(var i = 0; i < imgNames.length; i++){
    imgArray[i] = loadImage(path + imgNames[i] + ext);
    console.log(path + imgNames[i] + ext);
  }
}
 
function setup() {
  // cnv = createCanvas(600, 400); 
  createCanvas(windowWidth, 200);
  x = width/2;
  y = height/2;
    for (var i = 0; i < windowWidth; i++){
    index = floor(random(imgArray.length));
    x = windowWidth - imageWidth*i;
    image(imgArray[index], x, y);
  }
}

function draw() {
    // background(255);
    // count++;
    // console.log(count);
    // if (count === 100){
    //   var r = floor(random(0, imgArray.length));
    //   var b = new face(windowWidth-imageWidth, height/2, imgArray[r]);
    //   faces.push(b);
    //   count = 0;
    // }
    
    // for (var i = faces.length-1; i >= 0; i--) {
    //     faces[i].update();
    //     faces[i].display(); 
    // }
}

function mousePressed() {

}

 
function face (x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    
    this.display = function () {
        imageMode(CENTER);
        image(img, this.x, this.y);
    }

    this.update = function () {
        this.x = this.x - imageWidth*.009;
        // this.y = this.y + random(-1, 1);
    }
 }
