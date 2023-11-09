var randomNumber1;
var randomNumber2;
var randomImagePath1;
var randomImagePath2;
var image1;
var image2;

randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomImagePath1 = "./images/dice" + randomNumber1 + ".png";
image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImagePath1);


randomNumber2 = Math.floor(Math.random() * 6) + 1;
randomImagePath2 = "./images/dice" + randomNumber2 + ".png";
image2 = document.querySelectorAll("img")[2];
image2.setAttribute("src", randomImagePath2);

if (randomNumber1 > randomNumber2)
{
    document.querySelector("p").innerHTML = "Player 1 Win!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("p").innerHTML = "Player 2 Win!";
} else {
    document.querySelector("p").innerHTML = "Dead-heat...";
};