var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number btw 1 - 6

var randomImage1 = "images/dice" + randomNumber1 + ".png"; //random image btw dice1 - dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage1);

var randonNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + randonNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);

if (randomNumber1 > randonNumber2) {
    document.querySelector("h1").innerHTML = "✌ Player 1 wins!!!"
}

else if (randomNumber1 < randonNumber2) {
    document.querySelector("h1").innerHTML = " Player 2 wins ✌ !!!"
}

else {
    document.querySelector("h1").innerHTML = "Draw!!!"
}