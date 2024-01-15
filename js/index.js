let btn = document.querySelector("#btn")

btn.addEventListener(`click`, randomBg)
let arrColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"]

function randomBg() {

    document.body.style.backgroundColor = "#" + Math.random(arrColor.join("")).toString().slice(2, 8)

    // document.body.style.backgroundColor = "#" + Math.random().toString(16).slice(2, 8)
}
