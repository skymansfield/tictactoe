let switch1 = true;
let myArr = [];
let gameArr = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
let gameOver = false;
buttons = document.getElementsByClassName('btn')
buttons = [...buttons]
buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        if (gameOver == false) {
            if (switch1 === true) {
                switch1 = false;
                document.getElementById("player").innerHTML = "X's Turn"
                myArr.push("O")
                button.setAttribute("disabled", true)
            } else {
                switch1 = true;
                document.getElementById("player").innerHTML = "O's Turn"
                myArr.push("X")
                button.setAttribute("disabled", true)
            }
            if (button.value == "1") {
                if (switch1 == true) {
                    document.getElementById("top-left").innerText = "X"
                    gameArr[0][0] = "X"
                } else {
                    document.getElementById("top-left").innerText = "O"
                    gameArr[0][0] = "O"
                }
            }
            else if (button.value == "2") {
                if (switch1 == true) {
                    document.getElementById("top-middle").innerText = "X"
                    gameArr[0][1] = "X"
                } else {
                    document.getElementById("top-middle").innerText = "O"
                    gameArr[0][1] = "O"
                }
            }
            else if (button.value == "3") {
                if (switch1 == true) {
                    document.getElementById("top-right").innerText = "X"
                    gameArr[0][2] = "X"
                } else {
                    document.getElementById("top-right").innerText = "O"
                    gameArr[0][2] = "O"
                }
            }
            else if (button.value == "4") {
                if (switch1 == true) {
                    document.getElementById("middle-left").innerText = "X"
                    gameArr[1][0] = "X"
                } else {
                    document.getElementById("middle-left").innerText = "O"
                    gameArr[1][0] = "O"
                }
            }
            else if (button.value == "5") {
                if (switch1 == true) {
                    document.getElementById("middle-middle").innerText = "X"
                    gameArr[1][1] = "X"
                } else {
                    document.getElementById("middle-middle").innerText = "O"
                    gameArr[1][1] = "O"
                }
            }
            else if (button.value == "6") {
                if (switch1 == true) {
                    document.getElementById("middle-right").innerText = "X"
                    gameArr[1][2] = "X"
                } else {
                    document.getElementById("middle-right").innerText = "O"
                    gameArr[1][2] = "O"
                }
            }
            else if (button.value == "7") {
                if (switch1 == true) {
                    document.getElementById("bottom-left").innerText = "X"
                    gameArr[2][0] = "X"
                } else {
                    document.getElementById("bottom-left").innerText = "O"
                    gameArr[2][0] = "O"
                }
            }
            else if (button.value == "8") {
                if (switch1 == true) {
                    document.getElementById("bottom-middle").innerText = "X"
                    gameArr[2][1] = "X"
                } else {
                    document.getElementById("bottom-middle").innerText = "O"
                    gameArr[2][1] = "O"
                }
            }
            else if (button.value == "9") {
                if (switch1 == true) {
                    document.getElementById("bottom-right").innerText = "X"
                    gameArr[2][2] = "X"
                } else {
                    document.getElementById("bottom-right").innerText = "O"
                    gameArr[2][2] = "O"
                }
            }
            if (gameArr[0][0] == "O" && gameArr[0][1] == "O" && gameArr[0][2] == "O" || gameArr[1][0] == "O" && gameArr[1][1] == "O" && gameArr[1][2] == "O" || gameArr[2][0] == "O" && gameArr[2][1] == "O" && gameArr[2][2] == "O" || gameArr[0][0] == "O" && gameArr[1][0] == "O" && gameArr[2][0] == "O" || gameArr[0][1] == "O" && gameArr[1][1] == "O" && gameArr[2][1] == "O" || gameArr[0][2] == "O" && gameArr[1][2] == "O" && gameArr[2][2] == "O" || gameArr[0][0] == "O" && gameArr[1][1] == "O" && gameArr[2][2] == "O" || gameArr[0][2] == "O" && gameArr[1][1] == "O" && gameArr[2][0] == "O") {
                setTimeout(function myFunction() {
                    alert("O Wins")
                    gameOver = true;
                }, 100)
            } else if (gameArr[0][0] == "X" && gameArr[0][1] == "X" && gameArr[0][2] == "X" || gameArr[1][0] == "X" && gameArr[1][1] == "X" && gameArr[1][2] == "X" || gameArr[2][0] == "X" && gameArr[2][1] == "X" && gameArr[2][2] == "X" || gameArr[0][0] == "X" && gameArr[1][0] == "X" && gameArr[2][0] == "X" || gameArr[0][1] == "X" && gameArr[1][1] == "X" && gameArr[2][1] == "X" || gameArr[0][2] == "X" && gameArr[1][2] == "X" && gameArr[2][2] == "X" || gameArr[0][0] == "X" && gameArr[1][1] == "X" && gameArr[2][2] == "X" || gameArr[0][2] == "X" && gameArr[1][1] == "X" && gameArr[2][0] == "X") {
                setTimeout(function myFunction() {
                    alert("X Wins")
                    gameOver = true;
                }, 100)
            } else if (myArr.length == 9) {
                setTimeout(function myFunction() {
                    alert("Draw")
                    gameOver = true;
                }, 100)
            }
        }
    })
});