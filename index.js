document.getElementById("redCircle").addEventListener("dragstart", onDragStart);
document.getElementById("blueCircle").addEventListener("dragstart", onDragStart);
document.getElementById("redSquare").addEventListener("dragover", allowDrop);
document.getElementById("blueSquare").addEventListener("dragover", allowDrop);
document.getElementById("redSquare").addEventListener("drop", drop);
document.getElementById("blueSquare").addEventListener("drop", drop);

function onDragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    let square = document.getElementById(event.target.id);
    let circle = document.getElementById(event.dataTransfer.getData("text"));

    if(circle === square || square.classList[0] !== circle.classList[0]) {
        return false;
    }

    circle.style.top = "0";
    circle.style.left = "0";
    circle.style.bottom = "0";
    circle.style.right = "0";
    circle.setAttribute("draggable", "false");

    circle.ondragstart = function () { return false; };
    square.ondragover = function () { return false; };
    square.ondrop = function () { return false; };
}