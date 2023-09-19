//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    const stopButton = document.querySelector(".stop");
    const audio = document.getElementById("audio");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const soundFile = this.getAttribute("data-sound");
            audio.src = `sounds/${soundFile}`;
            audio.play();
        });
    });

    stopButton.addEventListener("click", function () {
        audio.pause();
        audio.currentTime = 0;
    });
});
