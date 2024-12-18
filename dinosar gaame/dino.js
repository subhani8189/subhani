const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let isJumping = false;
let gravity = 0.9;

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        if (!isJumping) {
            jump();
        }
    }
});

function jump() {
    let position = 0;
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    position *= gravity;
                    dino.style.bottom = position + "px";
                }
            }, 20);
        } else {
            position += 30;
            position *= gravity;
            dino.style.bottom = position + "px";
        }
    }, 20);
}

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game Over!");
    }
}, 10);