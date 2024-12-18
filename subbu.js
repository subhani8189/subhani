let timer;
let running = false;
let elapsed = 0;

function updateTime() {
    elapsed++;
    const hours = String(Math.floor(elapsed / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
    const seconds = String(elapsed % 60).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

function startStop() {
    if (running) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').textContent = 'Stop';
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    elapsed = 0;
    document.getElementById('time').textContent = '00:00:00';
    document.getElementById('startStop').textContent = 'Start';
    running = false;
}