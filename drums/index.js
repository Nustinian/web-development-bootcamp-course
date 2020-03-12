const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let key = this.innerHTML;
        playAudio(key);
    });
    buttons[i].addEventListener("mousedown", function () {
        this.classList.add("pressed");
    }, false);
    buttons[i].addEventListener("mouseup", function () {
        this.classList.remove("pressed");
    }, false);
}

window.addEventListener("keydown", function (event) {
    playAudio(event.key);
}, false);

window.addEventListener("keydown", pressKey, false);
window.addEventListener("keyup", unpressKey, false);

function playAudio(key) {
    switch(key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            return;
                   
    }
}

function pressKey(event) {
    if ("wasdjkl".includes(event.key)) {
        document.querySelector("." + event.key).classList.add("pressed");
    }
}

function unpressKey(event) {
    if ("wasdjkl".includes(event.key)) {
        document.querySelector("." + event.key).classList.remove("pressed");
    }
}