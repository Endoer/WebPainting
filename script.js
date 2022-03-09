"use strict"
const canvas = document.getElementById("drawField");
let ctx = canvas.getContext("2d");
ctx.strokeRect(0,0,canvas.width,canvas.height)
console.log(canvas);
class Pen {
    constructor(size = 10, color = 'black') {
        this.size = size;
        this.color = color;
    }
}

let pen = new Pen();


function drawPoint(event) {
    console.log("tryDraw")
    ctx.beginPath()
    ctx.arc(event.clientX, event.clientY-50, pen.size, 0, Math.PI * 2, true)
    ctx.fillStyle = pen.color;
    ctx.fill()
}

function drawing() {
    console.log("down");
    canvas.addEventListener('mousemove', drawPoint)
    canvas.addEventListener("mouseup", function () {
        console.log("up");
        canvas.removeEventListener('mousemove', drawPoint);
    });
}

function onCanvas() {
    console.log("On")
    canvas.addEventListener("mousedown", drawing)
}

function outCanvas() {
    console.log("Out")
    canvas.removeEventListener("mousedown", drawing)
    canvas.removeEventListener('mousemove', drawPoint);
}

canvas.addEventListener("mouseover", onCanvas);
canvas.addEventListener("mouseout", outCanvas);