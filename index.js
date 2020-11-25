
var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mousedown", function() {

    playAudio(this.innerHTML);
    animate(this.innerHTML);
  });
}

document.addEventListener("keydown", function() {
  var key = event.key;
  playAudio(key);
  animate(key);
});

function playAudio(key) {
  switch (key) {
    case "f":
      var audio_f = new Audio("sounds/crash.mp3");
      audio_f.play();
      break;
    case "a":
      var audio_a = new Audio("sounds/kick-bass.mp3");
      audio_a.play();
      break;
    case "s":
      var audio_s = new Audio("sounds/snare.mp3");
      audio_s.play();
      break;
    case "d":
      var audio_d = new Audio("sounds/tom-1.mp3");
      audio_d.play();
      break;
    case "j":
      var audio_j = new Audio("sounds/tom-2.mp3");
      audio_j.play();
      break;
    case "k":
      var audio_k = new Audio("sounds/tom-3.mp3");
      audio_k.play();
      break;
    case "l":
      var audio_l = new Audio("sounds/tom-4.mp3");
      audio_l.play();
      break;
    default:
  }
}

function animate(key){
  var button = document.querySelector("." + key);
  button.classList.add("pressed");

  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}
