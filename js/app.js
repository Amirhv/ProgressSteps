const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let currentActive = 1;

next.addEventListener("click", function () {
    if (currentActive < circles.length) {
        currentActive = currentActive + 1;
    }

    update();
});


prev.addEventListener("click", function () {
    if (currentActive > 1) {
        currentActive = currentActive - 1;
    }

    update();
});


function update() {
    if (currentActive > 1) {
        prev.disabled = false;
    } else {
        prev.disabled = true;
    }

    if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        next.disabled = false;
    }

    // Progress color based of it's width
    let progressWidth = (currentActive - 1) / (circles.length - 1) * 100;
    progress.style.width = progressWidth + '%';

    //Circles color based on value of CurrentActive
    circles.forEach((circle, index) => {
        if(currentActive >= index + 1){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
}