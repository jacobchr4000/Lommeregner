var input1;
var input2;
var art;
var mode = ["i1", "art", "i2", "res"];
var currentMode = mode[0];
var txtInput = document.getElementById("txtInput");

btn1.addEventListener("click", button1Clicked);
btn2.addEventListener("click", button2Clicked);
btn3.addEventListener("click", button3Clicked);
btn4.addEventListener("click", button4Clicked);
btn5.addEventListener("click", button5Clicked);
btn6.addEventListener("click", button6Clicked);
btn7.addEventListener("click", button7Clicked);
btn8.addEventListener("click", button8Clicked);
btn9.addEventListener("click", button9Clicked);
btn0.addEventListener("click", button0Clicked);
btnAdd.addEventListener("click", btnAddClicked);
btnSubtr.addEventListener("click", btnSubtrClicked);
btnTimes.addEventListener("click", btnTimesClicked);
btnDiv.addEventListener("click", btnDivClicked);
btnEnter.addEventListener("click", btnEnterClicked);
btnDec.addEventListener("click", btnDecClicked);

function button1Clicked(e) {
    if (currentMode == "i1" || currentMode == "i2") {
        txtInput.value += "1";
    } else {
        nextMode();
        txtInput.value = "1";
    }
}
function button2Clicked(e) {
    if (currentMode == "i1" || currentMode == "i2") {
        txtInput.value += "2";
    } else {
        nextMode();
        txtInput.value = "2";
    }
}
function button3Clicked(e) {
    if (currentMode == "i1" || currentMode == "i2") {
        txtInput.value += "3";
    } else {
        nextMode();
        txtInput.value = "3";
    }
}
function button4Clicked(e) {
    if (currentMode == "i1" || currentMode == "i2") {
        txtInput.value += "4";
    } else {
        nextMode();
        txtInput.value = "4";
    }
}
function button5Clicked(e) {
    if (currentMode == "i1" || currentMode == "i2") {
        txtInput.value += "5";
    } else {
        nextMode();
        txtInput.value = "5";
    }
}
function button6Clicked(e) {
    if (currentMode == "i1" || currentMode == "i2") {
        txtInput.value += "6";
    } else {
        nextMode();
        txtInput.value = "6";
    }
}
function button7Clicked(e) {
    if (currentMode == "i1" || currentMode == "i2") {
        txtInput.value += "7";
    } else {
        nextMode();
        txtInput.value = "7";
    }
}
function button8Clicked(e) {
    if (currentMode == "i1" || currentMode == "i2") {
        txtInput.value += "8";
    } else {
        nextMode();
        txtInput.value = "8";
    }
}
function button9Clicked(e) {
    if (currentMode == "i1" || currentMode == "i2") {
        txtInput.value += "9";
    } else {
        nextMode();
        txtInput.value = "9";
    }
}
function button0Clicked(e) {
    if (currentMode == "i1" || currentMode == "i2") {
        txtInput.value += "0";
    } else {
        nextMode();
        txtInput.value = "0";
    }
}
function btnDecClicked(e) {
    if (currentMode == "i1" || currentMode == "i2") {
        txtInput.value += ".";
    } else {
        nextMode();
        txtInput.value = "0.";
    }
}

function btnAddClicked(e) {
    if (currentMode == "i2") btnEnterClicked();
    if (currentMode == "res") nextMode();
    if (currentMode == "i1") {
        nextMode();
        input1 = parseFloat(txtInput.value);
        txtInput.value += "+";
        art = "+";
    }
}
function btnSubtrClicked(e) {
    if (currentMode == "i2") btnEnterClicked();
    if (currentMode == "res") nextMode();
    if (currentMode == "i1") {
        nextMode();
        input1 = parseFloat(txtInput.value);
        txtInput.value += "-";
        art = "-";
    }
}
function btnTimesClicked(e) {
    if (currentMode == "i2") btnEnterClicked();
    if (currentMode == "res") nextMode();
    if (currentMode == "i1") {
        nextMode();
        input1 = parseFloat(txtInput.value);
        txtInput.value += "*";
        art = "*";
    }
}
function btnDivClicked(e) {
    if (currentMode == "i2") btnEnterClicked();
    if (currentMode == "res") nextMode();
    if (currentMode == "i1") {
        nextMode();
        input1 = parseFloat(txtInput.value);
        txtInput.value += "/";
        art = "/";
    }
}

function btnEnterClicked(e) {
    if (currentMode == "i2") {
        nextMode();
        input2 = parseFloat(txtInput.value);
        switch (art) {
            case ("+"): txtInput.value = (input1 + input2); break;
            case ("-"): txtInput.value = (input1 - input2); break;
            case ("*"): txtInput.value = (input1 * input2); break;
            case ("/"): txtInput.value = (input1 / input2); break;
        }
    }
}

function nextMode() {
    switch (currentMode) {
        case (mode[0]): currentMode = mode[1]; break;
        case (mode[1]): currentMode = mode[2]; break;
        case (mode[2]): currentMode = mode[3]; break;
        case (mode[3]): currentMode = mode[0]; break;
    }
}