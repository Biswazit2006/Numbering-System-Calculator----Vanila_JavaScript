// -------------------------
// DOM NODES
// -------------------------
const baseBtnDec = document.getElementById("baseBtnDec");
const baseBtnBin = document.getElementById("baseBtnBin");
const baseBtnHex = document.getElementById("baseBtnHex");
const baseBtnOct = document.getElementById("baseBtnOct");

const inputDec = document.getElementById("inputDec");
const inputBin = document.getElementById("inputBin");
const inputHex = document.getElementById("inputHex");
const inputOct = document.getElementById("inputOct");

const actionButtons = document.querySelectorAll(".actionBtn");

// -------------------------
// GLOBAL STATE
// -------------------------
let activeBase = 10;
let inputBuffer = "";       // what user types
let decimalValue = 0;       // real number
let expression = "";        // math expression (always in decimal)

// -------------------------
// BASE BUTTON EVENTS
// -------------------------
baseBtnDec.onclick = () => changeBase(10);
baseBtnBin.onclick = () => changeBase(2);
baseBtnHex.onclick = () => changeBase(16);
baseBtnOct.onclick = () => changeBase(8);

function changeBase(base) {
  activeBase = base;
  inputBuffer = "";
  expression = "";
  setActiveBaseBtn(base);
  actionBtnDesabler(base);
  renderInputs();
}

// -------------------------
// BASE BUTTON UI
// -------------------------
function setActiveBaseBtn(base) {
  [baseBtnDec, baseBtnBin, baseBtnHex, baseBtnOct]
    .forEach(btn => btn.classList.remove("active"));

  if (base === 10) baseBtnDec.classList.add("active");
  if (base === 2) baseBtnBin.classList.add("active");
  if (base === 16) baseBtnHex.classList.add("active");
  if (base === 8) baseBtnOct.classList.add("active");
}

// -------------------------
// ACTION BUTTONS
// -------------------------
actionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("disabled")) return;

    const value = btn.innerText;

    // CLEAR
    if (value === "AC") {
      resetAll();
      return;
    }

    // DELETE
    if (value === "DEL") {
      inputBuffer = inputBuffer.slice(0, -1);
      updateDecimal();
      renderInputs();
      return;
    }

    // EQUAL
    if (value === "=") {
      calculateExpression();
      return;
    }

    // OPERATOR
    if (isOperator(value)) {
      appendOperator(value);
      return;
    }

    // NUMBER / HEX CHAR
    inputBuffer += value;
    updateDecimal();
    renderInputs();
  });
});

// -------------------------
// CORE LOGIC
// -------------------------
function updateDecimal() {
  if (inputBuffer === "") {
    decimalValue = 0;
    return;
  }

  decimalValue = parseInt(inputBuffer, activeBase);
}

function appendOperator(op) {
  if (inputBuffer === "") return;

  expression += parseInt(inputBuffer, activeBase) + op;
  inputBuffer = "";
}

function calculateExpression() {
  if (inputBuffer !== "") {
    expression += parseInt(inputBuffer, activeBase);
  }

  try {
    decimalValue = eval(expression);
  } catch {
    decimalValue = 0;
  }

  expression = "";
  inputBuffer = decimalValue.toString(activeBase);
  renderInputs();
}

// -------------------------
// RENDER ALL INPUTS
// -------------------------
function renderInputs() {
  inputDec.value = decimalValue.toString(10);
  inputBin.value = decimalValue.toString(2);
  inputHex.value = decimalValue.toString(16).toUpperCase();
  inputOct.value = decimalValue.toString(8);
}

// -------------------------
// HELPERS
// -------------------------
function resetAll() {
  inputBuffer = "";
  expression = "";
  decimalValue = 0;
  renderInputs();
}

function isOperator(val) {
  return ["+", "-", "*", "/"].includes(val);
}

// -------------------------
// BUTTON DISABLER
// -------------------------
function actionBtnDesabler(base) {
  document.querySelectorAll(".actionBtn")
    .forEach(btn => btn.classList.remove("disabled"));

  if (base === 2) {
    disable(".disableInBinMode");
  } else if (base === 8) {
    disable(".disableInOctMode");
  } else if (base === 10) {
    disable(".disableInDecMode");
  }
}

function disable(selector) {
  document.querySelectorAll(selector)
    .forEach(btn => btn.classList.add("disabled"));
}

// INIT
renderInputs();
