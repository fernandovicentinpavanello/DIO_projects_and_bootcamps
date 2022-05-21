let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count;
    if (count >= 1) {
        document.getElementById("btns").style.backgroundColor = "#303030";
    } else {
        document.getElementById("btns").style.backgroundColor = "red";
    }
    if (count >= 16) {
        document.getElementById("btn").disabled = true / false;
        document.getElementById("aviso").innerHTML = "Limite de 16!";
    }
}

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count;
    if (count < 0) {
        document.getElementById("btns").style.backgroundColor = "red";
    } else {
        document.getElementById("btns").style.backgroundColor = "#303030";
    }
}

document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {
    if (count == 15) {
        document.getElementById("aviso").innerHTML = "Você já atingiu o número 15! Vai com calma!";
    }
}