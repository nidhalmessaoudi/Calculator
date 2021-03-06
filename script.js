// NUMBERS
const point = document.querySelector(".k-point");
const zero = document.querySelector(".k0");
const one = document.querySelector(".k1");
const two = document.querySelector(".k2");
const three = document.querySelector(".k3");
const four = document.querySelector(".k4");
const five = document.querySelector(".k5");
const six = document.querySelector(".k6");
const seven = document.querySelector(".k7");
const eight = document.querySelector(".k8");
const nine = document.querySelector(".k9");


//OPERATORS
const plus = document.querySelector(".k-plus");
const minus = document.querySelector(".k-minus");
const times = document.querySelector(".k-times");
const divide = document.querySelector(".k-div");
const equal = document.querySelector(".k-equal");
const clear = document.querySelector(".kc");


// INPUT DISPLAY
const inputDisplay = document.querySelector(".calc-input");


// MODAL
const body = document.querySelector("body");
const model = document.querySelector(".model");
const closeModel = document.querySelector(".close-model");
const overlay = document.querySelector(".overlay");


// OPERATION
const calcOperation = function (expression) {
    return eval(expression);
}


// MODAL FUNCTIONALITY
setTimeout(function () {
    model.classList.remove("hidden");
    overlay.classList.remove("hidden");
    body.style.overflow = "hidden";
}, 6000);

closeModel.addEventListener("click", function () {
    model.classList.add("hidden");
    overlay.classList.add("hidden");
    body.style.overflow = "scroll";
});

if (model.classList.contains("hidden")) {
    document.addEventListener("keydown", function (i) {
        if (i.key === "Escape") {
            model.classList.add("hidden");
            overlay.classList.add("hidden");
            body.style.overflow = "scroll";
        }
    })
}

overlay.addEventListener("click", function () {
    model.classList.add("hidden");
    overlay.classList.add("hidden");
    body.style.overflow = "scroll";
});


// CLICK EVENT LISTENERS
point.addEventListener("click", function () {
    inputDisplay.value += ".";
});

zero.addEventListener("click", function () {
    inputDisplay.value += "0";
});

one.addEventListener("click", function () {
    inputDisplay.value += "1";
});

two.addEventListener("click", function () {
    inputDisplay.value += "2";
});

three.addEventListener("click", function () {
    inputDisplay.value += "3";
});

four.addEventListener("click", function () {
    inputDisplay.value += "4";
});

five.addEventListener("click", function () {
    inputDisplay.value += "5";
});

six.addEventListener("click", function () {
    inputDisplay.value += "6";
});

seven.addEventListener("click", function () {
    inputDisplay.value += "7";
});

eight.addEventListener("click", function () {
    inputDisplay.value += "8";
});

nine.addEventListener("click", function () {
    inputDisplay.value += "9";
});

clear.addEventListener("click", function () {
    inputDisplay.value = "";
});

plus.addEventListener("click", function () {
    inputDisplay.value += "+";
});

minus.addEventListener("click", function () {
    inputDisplay.value += "-";
});

times.addEventListener("click", function () {
    inputDisplay.value += "*";
});

divide.addEventListener("click", function () {
    inputDisplay.value += "/";
});

equal.addEventListener("click", function () {
    const currentValue = inputDisplay.value;
    inputDisplay.value = calcOperation(currentValue);
});


// KEYDOWN EVENTS
document.addEventListener("keydown", function (i) {
    if (i.key ===".") {
        inputDisplay.value += ".";

    } else if (i.key === "0") {
        inputDisplay.value += "0";

    } else if (i.key === "1") {
        inputDisplay.value += "1";

    } else if (i.key === "2") {
        inputDisplay.value += "2";

    } else if (i.key === "3") {
        inputDisplay.value += "3";

    } else if (i.key === "4") {
        inputDisplay.value += "4";

    } else if (i.key === "5") {
        inputDisplay.value += "5";

    } else if (i.key === "6") {
        inputDisplay.value += "6";

    } else if (i.key === "7") {
        inputDisplay.value += "7";

    } else if (i.key === "8") {
        inputDisplay.value += "8";

    } else if (i.key === "9") {
        inputDisplay.value += "9";

    } else if (i.key === "c") {
        inputDisplay.value = "";
        
    } else if (i.key === "+") {
        inputDisplay.value += "+";

    } else if (i.key === "+") {
        inputDisplay.value += "+";

    } else  if (i.key === "-") {
        inputDisplay.value += "-";

    } else if (i.key === "*") {
        inputDisplay.value += "*";

    } else if (i.key === "/") {
        inputDisplay.value += "/";

    }  else if (i.key === "=" || i.key === "Enter") {
        const currentValue = inputDisplay.value;
        inputDisplay.value = calcOperation(currentValue);

    } else if (i.key === "Backspace") {
        inputDisplay.value = inputDisplay.value.slice(0, -1);

    }

});

/*
- A simple and nice Calculator developed by Nidhal Messaoudi.
- Source code can be found at github.com/nidhalmessaoudi/calculator
- Deployed on Netlify and can be found at: nidhalcalc.netlify.app
- Developed as JS practice.
- Modal appears after 6 seconds from loading the website.
- Follow me in github to see more nice open source projects: https://github.com/nidhalmessaoudi
- To build your next project with me: Click contact us in the model.
*/
