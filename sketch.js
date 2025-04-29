let columns = 10;
let rows = 10;
let parola = "妈的";

//

let font;

function preload() {
  font = loadFont("./assets/STXINGKA.TTF");
}

//
let cam;

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");
  angleMode(DEGREES);

  textFont(font);
  textSize(height / 10);

  cam = createCamera();
  //cam.setPosition(0, -900, 400);
  //cam.lookAt(0, -300, 0);
  setupcam();
}

//

function draw() {
  background("YellowGreen");
  orbitControl();

  let angle = 360 / columns;
  let diameter = textSize();

  fill("black");

  rotateY(-frameCount);
  for (let i = 0; i < columns; i++) {
    push();
    rotateY(angle * i);
    translate(diameter, 0, 0);
    for (let j = 0; j < rows; j++) {
      const a = cos(frameCount * 5 + j * 20);
      const m = map(a, -1, 1, 0, textSize());
      push();
      translate(m, textSize() * (j - rows / 2), 0);
      text(parola, 0, 0);
      pop();
    }
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setupcam();
}
function setupcam() {
  cam.setPosition(0, -900, 400);
  cam.lookAt(0, -300, 0);
}
