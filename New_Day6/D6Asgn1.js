var i = 0;

function change() {
    var bColor = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
    document.body.style.backgroundColor = bColor[i];
    i = (i + 1) % bColor.length;
}

setInterval(change, 5000);