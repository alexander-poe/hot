var num,
    numInput,
    userFeedback;

//generate random number
var generateNum = function() {
    num = Math.floor((Math.random() * 100) + 1);
    return num;
};


//create a newGame;
function newGame() {
    generateNum();
}

//Feedback
function generateFeedback() {
    if (num === numInput) {
        // userFeedback = "you are cool";
        $('#feedback').text('Yay! Correct!');
    } else if (Math.abs(num - numInput) < 10) {
        // userFeedback = "hot";
        $('#feedback').text('hot');
    } else if (Math.abs(num - numInput) < 20) {
        // userFeedback = "kinda hot";
        $('#feedback').text('kinda hot');
    } else if (Math.abs(num - numInput) < 30) {
        // userFeedback = "less than warm";
        $('#feedback').text('less than warm');
    } else {
        // userFeedback = "cold";
        $('#feedback').text('warm');
    }
}

$(document).ready(function() {

    generateNum();

    $("#guess-form").submit(function(event) {
        event.preventDefault();
        numInput = parseInt($("#userGuess").val());
        generateFeedback();
    });

    $(".new").click(function(event) {

        $('#guess-form').children('input:not(#guessButton)').val('');

    });

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

  
    $('#guessButton').click(function(event){
    event.preventDefault()
    var counter = $('#count').val();
    counter++;
    $('#count').val(counter);
    console.log ('#guessButton was clicked')
});
//adding click count :)



});

// function check() {
//        if ((numInput % 1) !== 0) { //if not a number
//            alert('Input a number!');
//        } else if (numInput > 100) {
//            alert('Choose number between 0 and 100!');
//        }
//    }


/*function alreadyUsed(number) {
    num
}
function checkRepeat(list) {
    for()
}
function checkGuess(){
    if(userGuess %1 !==0){
checks to make sure input is
*/


//a counter for guesses make a guess - group 1 lavie alex

//what numbers were guessed in <lil> with ul #guesslist
//


//provide equation to let user know if they are close
//feedback should be in h2#feedback
//a counter for guesses "Make a Guess" - group 1 Lavie Alex
//what numbers were guessed in <li> with ul#guesslist
//make sure inputs for number is valid and prompt if it is not
