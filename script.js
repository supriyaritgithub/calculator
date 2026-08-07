const display = document.getElementsByClassName("display");

function clearDisplay() {
    display.value = "";    
}

function appendValue(num) {
    display.value += num
}
