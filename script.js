let currC = 1;

let circles = document.querySelectorAll(".circle");
let next = document.querySelector("#next");
let previous = document.querySelector("#prev");

previous.disabled = true;

next.addEventListener("click", () => {
    circles[currC - 1].classList.remove("active");

    currC++;

    circles[currC - 1].classList.add("active");

    previous.disabled = false;

    if (currC === 5) {
        next.disabled = true;
    }
});

previous.addEventListener("click", () => {
    circles[currC - 1].classList.remove("active");

    currC--;

    circles[currC - 1].classList.add("active");

    next.disabled = false;

    if (currC === 1) {
        previous.disabled = true;
    }
});