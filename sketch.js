let parti = 50;
let parola = "你好hello";

let font;
function preload() {
  font = loadFont("./assets/悠然体.ttf");
}

let h_parti;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(font);
  textAlign(CENTER);
  h_parti = height / parti;
  textSize(h_parti);
}

function draw() {
  background(0);

  orbitControl();
  translate(0, -height / 2);

  for (let i = 0; i < parti; i++) {
    push();
    //let z = map(cos(frameCount/10),-1,1,-200,200)
    let x = map(cos(frameCount / 10 + i * 5), -1, 1, -100, 100);
    let y = map(cos(frameCount / 10 + i * 5), -1, 1, -200, 100);
    let z = map(cos(frameCount / 10 + i * 5), -1, 1, -300, 100);
    translate(x, y, z);
    let y_parte = i * h_parti;
    let y_parola = y_parte + h_parti - textDescent();
    text(parola, 0, y_parola);
    pop();
  }
}
