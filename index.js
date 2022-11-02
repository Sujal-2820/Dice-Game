//Image1
var randomNum1 = Math.floor(Math.random() * 6) + 1;         //1 - 6

var randomDiceImg = "dice" + randomNum1 + ".png";           //dice1.png - dice6.png

var randomImgSource = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImgSource);


//Image2
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNum2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);


//comparison

if(randomNum1 > randomNum2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins the game";
}

else if(randomNum2 > randomNum1){
    document.querySelector("h1").textContent = "  Player 2 Wins the game 🚩";
}

else{
    document.querySelector("h1").textContent = "It's a Draw!";
}
