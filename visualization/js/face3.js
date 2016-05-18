var x, y, m, old_second, index;
// var width = windowWidth;
var imageWidth = 96;
var imgNames = ['angry', 'confused', 'disappointed_relieved','grimacing','grinning', 'neutral_face', 'no_mouth', 'stuck_out_tongue','worried'];
var path = 'http://b.parsons.edu/~compagnb/pgdv/feelin/images/';
var ext = '.png';
var count = 0;
var count2 = 0;
var margin = imageWidth;

var linkArray = [];
var imgArray =[];
var faces = [];

var img;
var canvas;

function setup() {
   for(var i = 0; i < imgNames.length; i++){
    linkArray.push(path + imgNames[i] + ext);
    // console.log(path + imgNames[i] + ext);
  }
  console.log(linkArray);
  for (var i = 0; i < windowWidth/imageWidth; i++){
    var index = floor(random(linkArray.length));
    x = windowWidth - margin - imageWidth*i;
    y = 0;
    var b = new face(linkArray[index], x, y, imageWidth, imageWidth);
    // console.log(imgArray[index]);
    faces.push(b);
  }

  for (var i = 0; i < windowWidth/imageWidth; i++){
    // faces[i].display();
    faces[i].update();
  }

}

function draw() {

  for (var i = 0; i < windowWidth/imageWidth; i++){
    // faces[i].display();
    faces[i].update();
  }

  // setTimeout(rotate(), 3000);
  window.addEventListener("resize", doSomething);
//   for (var h = faces.length-1; h >= 0; h--) {
//     faces[h].display();
//     faces[h].update();
//   }
}
// function setup() {
//   var cnv = createCanvas(windowWidth, imageWidth);
//   cnv.parent("emojiLanding");

//   for (var i = 0; i < windowWidth/imageWidth; i++){
//     var index = floor(random(imgArray.length));
//     x = windowWidth + margin - imageWidth*i;
//     y = imageWidth/2;
//     var b = new face(imgArray[index], x, y);
//     // console.log(imgArray[index]);
//     faces.push(b);
//   }

// }

// function draw() {
//   for (var h = faces.length-1; h >= 0; h--) {
//     faces[h].display();
//     faces[h].update();
//   }
// }


function face (img, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;

    this.display = function () {
        img = createImg(this.img);
        img.position(this.x , this.y)
        img.size(this.w , this.h)
        img.parent(emojiLanding)

    }

    this.update = function () {
      if (second() != old_second){
        count++;
        console.log(count);
      }
      if (second() != old_second && count == 10){
        if (this.x < margin || this.x > windowWidth - margin ){
          this.x = windowWidth + margin - imageWidth;
        }else{
          this.x = this.x - imageWidth;
        }
        count = 0;
      }
        // this.x = this.x - imageWidth*.015;
        // this.y = this.y + random(-1, 1);
    }

 }


function doSomething() {
  console.log("something");
  for (var i = 0; i < windowWidth/imageWidth; i++){
    faces[i].x =  windowWidth - margin - imageWidth*i;
  }
}

function rotate(){
  for (var h = faces.length-1; h >= 0; h--) {
    faces[h].update();
  }
 }

// function windowResized() {

//   // faces = [ ];
//   imageWidth = windowWidth/15;
//   resizeCanvas( windowWidth, imageWidth);
//   background(255);
//   margin = imageWidth/3;
//   y = imageWidth/2;
//   for (var i = 0; i < windowWidth/imageWidth; i++){
//     var index = floor(random(imgArray.length));
//     var x = windowWidth + margin - imageWidth*i;
//     var b = new face(imgArray[index], x, imageWidth/2);
//     // console.log(imgArray[index]);
//     faces.push(b);
//   }
//   background(255);
//   // update();


// }
