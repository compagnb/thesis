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
  var cnv = createCanvas(windowWidth, imageWidth*1.5);
  cnv.parent("emojiLanding");
}

function draw() {
    background(255);
    count++;
    console.log(count);
    if (count === 100){
      var r = floor(random(0, imgArray.length));
      var b = new face(windowWidth - imageWidth, height/2, imgArray[r]);
      faces.push(b);
      count = 0;
    }

    for (var i = faces.length-1; i >= 0; i--) {
        faces[i].update();
        faces[i].display();
    }
}


function face (x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;

    this.display = function () {
        imageMode(CENTER);
        image(img, this.x, this.y, imageWidth*1.5, imageWidth*1.5);
    }

    this.update = function () {
        this.x = this.x - imageWidth*.015;
        // this.y = this.y + random(-1, 1);
    }
 }

function windowResized() {
  resizeCanvas(windowWidth, imageWidth*1.5);
}
