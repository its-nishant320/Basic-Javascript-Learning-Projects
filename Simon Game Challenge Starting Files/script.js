var buttonColours = ['red','blue','yellow','green'];

function newSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours*randomNumber;
}




var randomChosenColour = $(".btn").click(function() {
    $(".btn").fadeOut(100).fadeIn(100);
})