let currentPattern = [];
let currentIndex = 0;
let gameActive = false;

function nextLevel() {
    currentIndex = 0;
    $("h1").text("Level " + (currentPattern.length + 1))
    let colors = ["green", "red", "yellow", "blue"];
    let rand = Math.floor(Math.random() * 4);
    currentPattern.push(colors[rand])
    let i = 0;
    let timer = setInterval(function () {
        playSound(currentPattern[i]);
        flashButton(currentPattern[i]);
        i++;
        if (i === currentPattern.length) {
            clearInterval(timer);
        }
    }, (1000 - 30 * currentPattern.length)) 
}

function playSound(sound) {
    var audio = new Audio("sounds/" + sound + ".mp3")
    audio.play();
}

function flashButton(button) {
    $("#" + button).addClass("pressed");
    setTimeout(function () {
        $("#" + button).removeClass("pressed");
    }, 50);
}

function startGame() {
    gameActive = true;
    nextLevel();
    $("h1").text("Good luck!");
}

function gameOver() {
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 50);
    playSound("wrong");
    let finalLevel = currentPattern.length;
    currentPattern = [];
    currentIndex = 0;
    gameActive = false;
    $("h1").text("Game over!");
    $("h1").after(`<p class='restart-text'>You made it to level ${finalLevel}.<br><br>Press any key to play again.</p>`)
    $(".start-button").fadeIn();
}

$(document).on("keypress", function () {
    $(".restart-text").remove();
    if (!gameActive) {
        startGame();
    }
})

$(".start-button").on("click", function() {
    $(".restart-text").remove();
    $(".start-button").fadeOut();
    startGame();
})


$(".game-button").on("click", function () {
    flashButton(this.id);
    playSound(this.id);
    if (gameActive) {
        if (this.id === currentPattern[currentIndex]) {
            currentIndex++;
            console.log(currentIndex);
            if (currentIndex === currentPattern.length) {
                nextLevel();
            }
        } else {
            gameOver();
        }
    }
})
