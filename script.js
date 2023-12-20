const bell = document.querySelector(".bell-icon");

bell.addEventListener("mouseover", bellHover);
bell.addEventListener("mouseout", bellHover);

function bellHover(e) {
    e.target.classList.toggle("fa-regular");
    e.target.classList.toggle("fa-solid");
}