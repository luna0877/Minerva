console.log("is called");
    

var showDot = false;
var q1 = Number(document.getElementById("q1").value); // Ide/Mat
var q2 = Number(document.getElementById("q2").value); // Mod/Tra
var q3 = Number(document.getElementById("q3").value); // Ide/Mat
var q4 = Number(document.getElementById("q4").value); // Mod/Tra
var q5 = Number(document.getElementById("q5").value); // Ide/Mat
var q6 = Number(document.getElementById("q6").value); // Mod/Tra
var q7 = Number(document.getElementById("q7").value); // Mod/Tra
var q8 = Number(document.getElementById("q8").value); // Ide/Mat
function setup(){ 
    // draw a koordinatessystem with colours
    // draw a point from getPosition
    var scale = 2;
    var canvasSize = 200*scale;
    var size = canvasSize/2;
    var coordFix = size;
    var buffer = size*0.05;

    createCanvas(canvasSize,canvasSize); 
    background(200);
    
    // draw a koordinatessystem with colours, you might use functions fill, rect and text
    noStroke();

    
}

function draw(){
    var scale = 2;
    var canvasSize = 200*scale;
    var size = canvasSize/2;
    var coordFix = size;
    fill(0,0,0);
    if(showDot){
        var arr = getPosition(q1, q2, q3, q4, q5, q6, q7, q8);
  
        var x = arr[0];
        var y = arr[1];
        var xCoordFix = x*scale+coordFix
        var yCoordFix = ((y*scale-coordFix)**2)**0.5
        // draw dot from coordinates.
    }
}
// Get answers from all 8 outputs
// Høj værdi = Moderne/Idealistisk
// Lav værdi = Traditionel/Materialistisk

//etc

// make function to make point x,y where x and y in [-0;0] from 8 answers.
// Sum af værdier fra spørgsmål for at lave x- og y-koordinater
var getPosition = function(q1, q2, q3, q4, q5, q6, q7, q8){
    var x = 0 // lav formel
    var y = 0 // lav formel
    return [x, y];
}
var placePressed = function(){
    showDot=true;
    q1 = Number(document.getElementById("q1").value); // Mod/Tra
    var q2 = 1; // Ide/Mat
    var q3 = 1; // Mod/Tra
    var q4 = 1; // Ide/Mat
    var q5 = 1; // Mod/Tra
    var q6 = 1; // Ide/Mat
    var q7 = 1; // Mod/Tra
    var q8 = 1; // Ide/Mat
    var arr = getPosition(q1, q2, q3, q4, q5, q6, q7, q8);
    persontyper(arr[0], arr[1]);
}
/**
 * Vi den rigtige tekste afhængig af fortegn på x og y
 * @param {Ide/Mat} x 
 * @param {Mod/Tra} y 
 */
var persontyper = function(x, y){
    // flere tilfælde
    if (true/* lav boolsk udtryk */){
        document.getElementById ("d1").style.display="block";
        document.getElementById ("d2").style.display="none";
        document.getElementById ("d3").style.display="none";
        document.getElementById ("d4").style.display="none";
    }

}
console.log("JavaScript finished");

