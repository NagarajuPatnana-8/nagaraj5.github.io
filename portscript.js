let sscbtnEl = document.getElementById('ssc-button');
let pucbtnEl = document.getElementById('puc-button');
let btechbtnEl = document.getElementById('btech-button');

let sscdisEl = document.getElementById('ssc-details');
let pucdisEl = document.getElementById('puc-details');
let btechdisEl = document.getElementById('btech-details');

pucdisEl.classList.add("d-none");
btechdisEl.classList.add("d-none");

sscbtnEl.classList.add("ed-btn");

function clickssc() {
    sscdisEl.classList.remove("d-none");
    pucdisEl.classList.add("d-none");
    btechdisEl.classList.add("d-none");
    sscbtnEl.classList.add("ed-btn");
    pucbtnEl.classList.remove("ed-btn");
    btechbtnEl.classList.remove("ed-btn");

}

function clickpuc() {
    sscdisEl.classList.add("d-none");
    pucdisEl.classList.remove("d-none");
    btechdisEl.classList.add("d-none");
    sscbtnEl.classList.remove("ed-btn");
    btechbtnEl.classList.remove("ed-btn");
    pucbtnEl.classList.add("ed-btn");
}

function clickbtech() {
    sscdisEl.classList.add("d-none");
    pucdisEl.classList.add("d-none");
    btechdisEl.classList.remove("d-none");
    btechbtnEl.classList.add("ed-btn");
    pucbtnEl.classList.remove("ed-btn");
    sscbtnEl.classList.remove("ed-btn");
}