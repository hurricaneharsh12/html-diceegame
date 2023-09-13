var randomNumber1=Math.random();
//alert(randomNumber1);
var randomNumber2=randomNumber1*6;
var randomNumber3=Math.floor(randomNumber2)+1;
//alert(randomNumber3);
var randomDiceImage = "dice" + randomNumber3 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber4= Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber4 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// var player1Name=prompt("Please write ur name Player1");
// var player2Name=prompt("Please write ur name player2");

if(randomNumber3>randomNumber4){
    document.querySelector("h1").innerHTML= ("player 1 you have won ✌️🏆💫");
}
else if(randomNumber3<randomNumber4){
    document.querySelector("h1").innerHTML=  ("Player 2 you have won ✌️🏆💫"");
}
else{
    document.querySelector("h1").innerHTML="There's a tie!!"

}


