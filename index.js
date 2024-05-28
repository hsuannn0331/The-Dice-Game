var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "./images/dice" + randomNumber1 + ".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player1 Wins!";
    document.querySelector(".player1").innerHTML = "🚩 Player1";
} else if (randomNumber1 < randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player2 Wins!";
    document.querySelector(".player2").innerHTML = "Player2 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";    
}

