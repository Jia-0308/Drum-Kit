document.querySelector(".w.drum").addEventListener("click", function() {
  var audio = new Audio('sounds/crash.mp3');
  audio.play();
  buttonAnimation("w");
});
document.querySelector(".a.drum").addEventListener("click", function() {
  var audio = new Audio('sounds/kick-bass.mp3');
  audio.play();
  buttonAnimation("a");
});
document.querySelector(".s.drum").addEventListener("click", function() {
  var audio = new Audio('sounds/snare.mp3');
  audio.play();
  buttonAnimation("s");
});
document.querySelector(".d.drum").addEventListener("click", function() {
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
  buttonAnimation("d");
});
document.querySelector(".j.drum").addEventListener("click", function() {
  var audio = new Audio('sounds/tom-2.mp3');
  audio.play();
  buttonAnimation("j");
});
document.querySelector(".k.drum").addEventListener("click", function() {
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play();
  buttonAnimation("k");
});
document.querySelector(".l.drum").addEventListener("click", function() {
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play();
  buttonAnimation("l");
});

//Key downs
document.addEventListener("keydown", function(event) {
  if (event.key === "w") {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    buttonAnimation(event.key);
  }
  else if (event.keyCode === 65) {
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    buttonAnimation(event.key);
  }
  else if (event.keyCode === 83) {
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    buttonAnimation(event.key);
  }
  else if (event.keyCode === 68) {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    buttonAnimation(event.key);
  }
  else if (event.keyCode === 74) {
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    buttonAnimation(event.key);
  }
  else if (event.keyCode === 75) {
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    buttonAnimation(event.key);
  }
  else if (event.keyCode === 76) {
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    buttonAnimation(event.key);
  }
});

//Button Animation
function buttonAnimation(key){
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
