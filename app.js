let timer;
let timeLeft = 25 * 60;
let running = false;
const timerDisplay = document.querySelector(".timer");

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("shortBreak").addEventListener("click", () => setTimer(5));
document.getElementById("longBreak").addEventListener("click", () => setTimer(15));

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                running = false;
            }
        }, 1000);
    }
}


function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateDisplay();
    running = false;
}

function stopTimer() {
    clearInterval(timer);
    timeLeft = 0;
    updateDisplay();
    running = false;
}

function setTimer(minutes) {
    clearInterval(timer);
    timeLeft = minutes * 60;
    updateDisplay();
    running = false;
}

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

updateDisplay();
