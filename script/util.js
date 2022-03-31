const MYBUTTONS = document.querySelectorAll(".menu button");
const MYSECTIONS = document.querySelectorAll(".menuDishes > *");

function removeActive(itr = [], claaName = "") {
    for (let i = 0; i < itr.length; i++) {
        itr[i].classList.remove(claaName);
    }
}

export default {
    removeActive,
    MYBUTTONS,
    MYSECTIONS,
};
