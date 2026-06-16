function blueChange() {
const blue = document.getElementById('blue');
blue.style.backgroundColor = "lightblue";
blue.style.color = "white";
}


function redChange() {
const red = document.getElementById('red');
red.style.backgroundColor = "lightcoral";
red.style.color = "white";
}


function yellowChange() {   
const yellow = document.getElementById('yellow');
yellow.style.backgroundColor = "yellow";
yellow.style.color = "black";
}

function greenChange() {
    
const green = document.getElementById('green');
green.style.backgroundColor = "lightgreen";
green.style.color = "black";
}


//greeting function
const greet = () => {
    const name = document.getElementById('name').value;
    const greetElement = document.getElementById('greet');
    greetElement.innerHTML = `Hello, ${name}`;
}

