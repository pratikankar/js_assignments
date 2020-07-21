//Welcome Message
var name = prompt("Enter your name: ");
message.innerText += `Welcome to our page "${name}"`;

//Clock
var now = document.getElementById('time');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    now.innerText = time;
}

setInterval(clock,1000);

//Toggle method to switch to dark mode
function darkMode() {
    var e = document.body;
    e.classList.toggle("dark-mode");
}