let inputDisplay = document.getElementById("input");
let resultDisplay = document.getElementById("result");
let currentInput = "";

function append(char) {
  currentInput += char;
  inputDisplay.textContent = currentInput;

  try {
    let result = eval(currentInput);
    resultDisplay.textContent = result;
  } catch {
    resultDisplay.textContent = "Error";
  }
}

function clearScreen() {
  currentInput = "";
  inputDisplay.textContent = "";
  resultDisplay.textContent = "";
}

function calculate() {
  try {
    let result = eval(currentInput);
    currentInput = result.toString();
    inputDisplay.textContent = currentInput;
    resultDisplay.textContent = "";
  } catch {
    resultDisplay.textContent = "Error";
  }
}
