var randomNumber1 = Math.floor(Math.random()*6)+1;

var diceImage = document.querySelector(".img1");
if(randomNumber1 == 1) {
    diceImage.setAttribute("src","./images/dice1.png");
}

else if(randomNumber1 === 2) {
    diceImage.setAttribute("src","./images/dice2.png");
}

else if(randomNumber1 === 3) {
    diceImage.setAttribute("src","./images/dice3.png");
}

else if(randomNumber1 === 4) {
    diceImage.setAttribute("src","./images/dice4.png");
}

else if(randomNumber1 === 5) {
    diceImage.setAttribute("src","./images/dice5.png");
}

else {
    diceImage.setAttribute("src","./images/dice6.png");
}


var randomNumber2 = Math.floor(Math.random()*6)+1;

var diceImage = document.querySelector(".img2");
if(randomNumber2 == 1) {
    diceImage.setAttribute("src","./images/dice1.png");
}

else if(randomNumber2 === 2) {
    diceImage.setAttribute("src","./images/dice2.png");
}

else if(randomNumber2 === 3) {
    diceImage.setAttribute("src","./images/dice3.png");
}

else if(randomNumber2 === 4) {
    diceImage.setAttribute("src","./images/dice4.png");
}

else if(randomNumber2 === 5) {
    diceImage.setAttribute("src","./images/dice5.png");
}

else {
    diceImage.setAttribute("src","./images/dice6.png");
}

var title = document.querySelector("h1");

if(randomNumber1 === randomNumber2) {
    title.textContent = "Draw !";
}

else if(randomNumber1 > randomNumber2) {
    title.textContent = "player 1 wins !"
}

else {
    title.textContent = "player 2 wins !"
}


