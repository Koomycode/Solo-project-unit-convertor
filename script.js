const toggle = document.getElementById("toggle-dark")
const body = document.querySelector(".body")
const box = document.querySelectorAll(".box")
const h3 = document.querySelectorAll("h3")
const text = document.querySelectorAll(".text")
const line = document.querySelectorAll(".line")


toggle.addEventListener("click", function() {
    this.classList.toggle("fa-moon")
    if (this.classList.toggle("fa-sun")) {
        body.style.background = "#1F2937"
        box.forEach(function(cls) {
            cls.style.background = "#273549"
        })
        h3.forEach(function(cls) {
            cls.style.color = "#CCC1FF"
        })
        text.forEach(function(cls) {
            cls.style.color = "#FFF"
        })
        line.forEach(function(cls) {
            cls.style.background = "#EEE"
        })
    } else {
        body.style.background = "#f4f4f4"
        box.forEach(function(cls) {
            cls.style.background = "#FFF"
        })
        h3.forEach(function(cls) {
            cls.style.color = "#5a537b"
        })
        text.forEach(function(cls) {
            cls.style.color = "#353535"
        })
        line.forEach(function(cls) {
            cls.style.background = "#333"
        })
    }
})

const input = document.getElementById("num-box")
const convertBtn = document.getElementById("convert")
const textMF = document.getElementById("meter-feet")
const textFM = document.getElementById("feet-meter")
const textLG = document.getElementById("liters-gallon")
const textGL = document.getElementById("gallon-liters")
const textKP = document.getElementById("kilo-pound")
const textPK = document.getElementById("pound-kilo")

function multi(num1, num2){
    return num1 * num2
}

convertBtn.addEventListener("click", function() {
    let newNum = input.value
    let mfResult = Math.round( multi(newNum, 3.281) * 100 ) / 100
    textMF.textContent = `
        ${newNum} meter = ${mfResult} feet 
    `
    let fmResult = Math.round( multi(newNum, 0.3048) * 100 ) / 100
    textFM.textContent = `
        ${newNum} feet = ${fmResult} meter
    `
    let lgResult = Math.round( multi(newNum, 0.264) * 100 ) / 100
    textLG.textContent = `
        ${newNum} liter = ${lgResult} gallon
    `
    let glResult = Math.round( multi(newNum, 4.546) * 100 ) / 100
    textGL.textContent = `
        ${newNum} gallon = ${glResult} liter
    `
    let kpResult = Math.round( multi(newNum, 2.204) * 100 ) / 100
    textKP.textContent = `
        ${newNum} kilogram = ${kpResult} pound
    `
    let pkResult = Math.round( multi(newNum, 0.4535) * 100 ) / 100
    textPK.textContent = `
        ${newNum} pound = ${pkResult} kilogram
    `
})