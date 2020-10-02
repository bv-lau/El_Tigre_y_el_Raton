
let text = []
let parallax_screen;

let arrayTextWords = [];

let arrayWord = ["tigre", "compartieramos", "raton", "flor", "bizcocho"];
    
function preload(){
  text = loadStrings ('data/Tigre_y_Raton.txt');
}

function setup(){
  createCanvas(700, 700);
  //let arrayText = app.loadStrings('El_Tigre_y_el_Raton.txt');
  //let arrayTextWords = [];
  console.log(text);
  console.log("Entro"); 
  parallax_screen = new Parallaxx (784,784);
  
  for (let i = 0; i < text.length; i++) {
    let arraySplit = text[i].split();
    for (let j = 0; j < arraySplit.length; j++) {
      arrayTextWords.push(arraySplit[j]);
    }
  } 
//app.fill(0);
 console.log (text[0]);
//array: compare words

for (let i = 0; i < arrayWord.length; i++) {
  console.log("prueba");
  for (let j = 0; j < text.length; j++) {
    var word = text[j];
    word.toLowerCase();
    console.log("array" + word);
    if (word == arrayWord[i]){
      app.print("read");
    }
  }
}
//charger png ----
};

function imgLoader(){
  //PARALLAX EFFECT (each screen):
  parallax = loadImage("/data/PARALLAX.png");

  //In first screen:
  logo = loadImage("/data/LOGO.png"); //LOGO
  next = loadImage("/data/NEXT.png"); //Button (next or play)

  //In second screen:
  rat = loadImage("/data/RAT.png"); // Draw: Rat
  tiger = loadImage("/data/TIGER.png"); // Draw: Tiger

  strokes = loadImage("/data/STROKES.png"); //strokes in colors

  donut = loadImage("/data/DONUT.png"); // Draw: Donut / Bizcocho
  flower = loadImage("/data/FLOWER.png"); // Draw: flower
  knife = loadImage("/data/KNIFE.png"); // Draw: knife
  
  save = loadImage("/data/SAVE.png"); // Button: save (new story)

  share_donut = loadImage("/data/SHARE-DONUT.png"); // message: Tiger says share donut
  
  yes_tks = loadImage("/data/YES-TKS.png"); // message: Rat says yes

  donut_rat = loadImage("/data/DONUT-RAT.png"); // Draw: Donut / Bizcocho of Rat (left)
  donut_tiger = loadImage("/data/DONUT-TIGER.png"); // Draw: Donut / Bizcocho of Tiger (right)
  
  want_flower = loadImage("/data/WANT-FLOWER.png"); // message: Tiger says want flower

  alert_save = loadImage("/data/ALERT-SAVE.png"); //alert (you can use the save button)
  its_save = loadImage("/data/ITS-SAVE.png"); // message: its save
};
  
function draw() {
  background(255);

  //parallax_screen._pintar();
  
};
    
//when you RELEASE THE CLICK
function mouseReleased() {

};
  
//when you MOVE THE MOUSE
function mouseDragged() {

};
 