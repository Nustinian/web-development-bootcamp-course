window.onload = function() {
    var roll1 = Math.floor(Math.random() * 6) + 1;
    var roll2 = Math.floor(Math.random() * 6) + 1;
    path1 = "images/dice" + roll1.toString() + ".png"
    path2 = "images/dice" + roll2.toString() + ".png"
    document.querySelector(".img1").setAttribute("src", path1);
    document.querySelector(".img2").src = path2;
    if (roll1 > roll2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
    } else if (roll2 > roll1) {
        document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
    } else {
        document.querySelector("h1").innerHTML = "<em>Draw!<em>"
    }
}