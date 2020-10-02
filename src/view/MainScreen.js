
let text = []

let arrayWord = ["tigre", "compartieramos", "raton", "flor", "bizcocho"];
    
function preload(){
  text = loadStrings ('data/Tigre_y_Raton.txt');
}

function setup(){
  createCanvas(700, 700);
  //let arrayText = app.loadStrings('El_Tigre_y_el_Raton.txt');
  let arrayTextWords = [];
  console.log(text);
  console.log("Entro"); 
  
  for (let i = 0; i < arrayText.length; i++) {
    let arraySplit = arrayText[i].split();
    for (let j = 0; j < arraySplit.length; j++) {
      arrayTextWords.push(arraySplit[j]);
    }
  } 
//app.fill(0);
 console.log (arrayText[0]);
//array: compare words

for (let i = 0; i < arrayWord.length; i++) {
  console.log("prueba");
  for (let j = 0; j < arrayText.length; j++) {
    var word = arrayText[j];
    word.toLowerCase();
    console.log("array" + word);
    if (word == arrayWord[i]){
      app.print("read");
    }
  }
}
//charger png ----
};
  
function draw() {
  background(255);
};
    
//when you RELEASE THE CLICK
mouseReleased = function() {

};
  
//when you MOVE THE MOUSE
mouseDragged = function() {

};
 