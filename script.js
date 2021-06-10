const main = document.querySelector(".main");
const keyContainer = document.querySelector(".key-container");
const inputDisplay = document.querySelector(".calc-input");

const body = document.querySelector("body");
const model = document.querySelector(".model");
const closeModel = document.querySelector(".close-model");
const overlay = document.querySelector(".overlay");

// FOOTER
const footerHTML = `
<div class="footer">
    <p>&copy; Copyright ${new Date().getFullYear()}. Designed and developed by Nidhal Messaoudi.</p>
</div>
`;

main.insertAdjacentHTML("beforeend", footerHTML);

// KEYS
const printPoint = () => (inputDisplay.value += ".");
const printZero = () => (inputDisplay.value += "0");
const printOne = () => (inputDisplay.value += "1");
const printTwo = () => (inputDisplay.value += "2");
const printThree = () => (inputDisplay.value += "3");
const printFour = () => (inputDisplay.value += "4");
const printFive = () => (inputDisplay.value += "5");
const printSix = () => (inputDisplay.value += "6");
const printSeven = () => (inputDisplay.value += "7");
const printEight = () => (inputDisplay.value += "8");
const printNine = () => (inputDisplay.value += "9");
const printPlus = () => (inputDisplay.value += " + ");
const printMinus = () => (inputDisplay.value += " - ");
const printTimes = () => (inputDisplay.value += " * ");
const printDivide = () => (inputDisplay.value += " / ");
const clear = () => (inputDisplay.value = "");

// OPERATION
const calcOperation = () => {
  const currentValue = inputDisplay.value;
  inputDisplay.value = eval(currentValue);
};

// MODAL FUNCTIONALITY
setTimeout(function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
}, 10000);

closeModel.addEventListener("click", function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
});

if (model.classList.contains("hidden")) {
  document.addEventListener("keydown", function (i) {
    if (i.key === "Escape") {
      model.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  });
}

overlay.addEventListener("click", function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
});

// CLICK EVENT LISTENERS
keyContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("operator")) {
    // NUMBERS
    if (e.target.classList.contains("k-point")) printPoint();
    if (e.target.classList.contains("k0")) printZero();
    if (e.target.classList.contains("k1")) printOne();
    if (e.target.classList.contains("k2")) printTwo();
    if (e.target.classList.contains("k3")) printThree();
    if (e.target.classList.contains("k4")) printFour();
    if (e.target.classList.contains("k5")) printFive();
    if (e.target.classList.contains("k6")) printSix();
    if (e.target.classList.contains("k7")) printSeven();
    if (e.target.classList.contains("k8")) printEight();
    if (e.target.classList.contains("k9")) printNine();

    // OPERATORS
    if (e.target.classList.contains("k-plus")) printPlus();
    if (e.target.classList.contains("k-minus")) printMinus();
    if (e.target.classList.contains("k-times")) printTimes();
    if (e.target.classList.contains("k-div")) printDivide();
    if (e.target.classList.contains("kc")) clear();
    if (e.target.classList.contains("equal-operator")) calcOperation();
  }
});
// KEYDOWN EVENTS
document.addEventListener("keydown", function (i) {
  if (!i.altKey && !i.ctrlKey && i.shiftKey) {
    i.preventDefault();
  }
  switch (i.key) {
    case ".":
      printPoint();
      break;
    case "0":
      printZero();
      break;
    case "1":
      printOne();
      break;
    case "2":
      printTwo();
      break;
    case "3":
      printThree();
      break;
    case "4":
      printFour();
      break;
    case "5":
      printFive();
      break;
    case "6":
      printSix();
      break;
    case "7":
      printSeven();
      break;
    case "8":
      printEight();
      break;
    case "9":
      printNine();
      break;
    case "c":
      clear();
      break;
    case "+":
      printPlus();
      break;
    case "-":
      printMinus();
      break;
    case "*":
      printTimes();
      break;
    case "/":
      printDivide();
      break;
    case "=":
      calcOperation();
      break;
    case "Enter":
      calcOperation();
      break;
    case "Backspace":
      inputDisplay.value = inputDisplay.value.slice(0, -1);
      break;
  }
});

/*
- A simple and nice Calculator developed by Nidhal Messaoudi.
- Source code can be found at: github.com/nidhalmessaoudi/calculator/
- Deployed on Netlify and can be found at: nidhalcalc.netlify.app/
- Follow me in github to see more nice open source projects: https://github.com/nidhalmessaoudi/
- To build your next project with me: Click contact us in the modal.
*/
