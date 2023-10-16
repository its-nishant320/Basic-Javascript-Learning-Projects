var gamePattern = [];
var buttonColours = ['red','blue','yellow','green'];

function newSequence() {
    var randomNumber = buttonColours[Math.floor(Math.random()*buttonColours.length)];
    gamePattern.push(randomNumber);
    
    $("." + randomNumber).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("./sounds/"+ randomNumber +".mp3");
    audio.play();
    
}

newSequence();