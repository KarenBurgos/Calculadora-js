var display = document.getElementById("display")

var button = document.getElementsByClassName("button")
var number = document.getElementsByClassName("number")


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", click)
    
}
var value = "";
var flag = false;

function click(e) {
    var buttonPressed = e.target
    
    if(buttonPressed.className == "button number"){
        numberPress(buttonPressed)
    }
    else if (buttonPressed.className == "button clear"){
        clear()
    }

    else if(buttonPressed.className == "button erase") {
        erase()
    }
        
    else if(buttonPressed.className == "button point"){
        decimal()
    }

    else if(buttonPressed.className == "button operator"){
        var num = display.value
        var lastC = (num.charAt(num.length - 1))
        
        if( lastC == "+" || lastC == "-" || lastC == "/" || lastC == "*"){
             display.value = display.value.slice(0,-1)
             display.value += buttonPressed.value
        }
        else{
            display.value += buttonPressed.value
     }
    }

    else if(buttonPressed.className == "button sqrt") {
        var num = display.value
        var sqrt = num.slice(-3) 
        
        if(sqrt == "**2") {
            display.value = display.value.slice(0,-3)
            if(buttonPressed.value == "x²"){
                display.value += "**2" 
            }
        }else {
            display.value += "**2"
        }

        console.log(sqrt)
        
    }

    else if(buttonPressed.className == "button sign") {
        console.log(lastCharacter(display.value, 1))
        if(lastCharacter(display.value, 1) == "") {
            display.value += "-"
        }
        else if(lastCharacter(display.value, 1 ) == "-") {
            display.value += ""
        }
    }

    else if(buttonPressed.className == "button equal") {
        value = display.value
        console.log(value)
        display.value = eval(value)
    }
}

function numberPress(buttonPressed) {
    display.value += buttonPressed.value
}

function clear() {
    value = ""
        display.value = ""
}

function erase() {
    display.value = display.value.slice(0,-1)
}

function decimal() {

    if(display.value == "") {
        display.value = "0."
    }
    else {
        display.value += "."
    }
}

function lastCharacter(value, num) {
    return value.slice(0,num) 
}