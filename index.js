var allButtons = document.querySelectorAll(".drum").length;

//vsi gumbi, ki jih imamo na strani in ob pritisku kliče funkcijo pressedButton

for (var i = 0; i < allButtons; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", pressedButton);
}

//preveri, kateri gumb smo pritisnili

function pressedButton() {
  var pressedKey = this.innerHTML;
  playSound(pressedKey);
  animationOnPressed(pressedKey);
}

//event listener za tipke, ki jih pritisne uporabnik in jih primerja s swich casom

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  animationOnPressed(event.key);
});


//funkcija, ki ob klicu predavaja posamezen zvok
function playSound (key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default: console.log(this.innerHTML);
      break;
  }
}

//animacija, ko pritisneš na gumb, ali ko pritisneš tipko na tipkovnici

function animationOnPressed (pressedKey) {
  var activeButton = document.querySelector("." + pressedKey);

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
} 