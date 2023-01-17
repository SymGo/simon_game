var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "yellow", "blue", "green"];

var level = 0;

$(".btn").on("click", function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
})

var started = false;
$(document).on("keydown", function() {
  if(!started) {
    $("#level-title").text("Level 0");
    nextSequence();
    started = true;
  }
})

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level+=1;
  $("#level-title").text("Level "+level);
}

function playSound(name) {
  var sound = new Audio("sounds/"+name+".mp3");
  sound.play();
}

function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");
  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  }, 100)
}
