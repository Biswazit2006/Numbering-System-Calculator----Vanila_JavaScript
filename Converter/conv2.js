//=====================================================
// DOM Elements
//=====================================================
const switchBtn = document.querySelectorAll(".switch-btn");
const panels = document.querySelectorAll(".panel");
const basaBtn = document.querySelectorAll(".baseBtn");
const clearBtn = document.querySelectorAll(".clearBtn");

// Input Fields
const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const inputThree = document.getElementById("inputThree");
const inputThebase = document.getElementById("inputThebase");
const inputTobase = document.getElementById("inputTobase");

// Convert Buttons
const convertBtnOne = document.getElementById("convertBtnOne");
const convertBtnTwo = document.getElementById("convertBtnTwo");
const convertBtnThree = document.getElementById("convertBtnThree");

// Result Fields
const resultOne = document.getElementById("resultOne");
const resultTwo = document.getElementById("resultTwo");
const resultThree = document.getElementById("resultThree");

//=====================================================
// Navbar Hamburg Function
//=====================================================
const hamburgerBtn = document.getElementById("hamburg");
const crossBtn = document.getElementById("cross");
const menu = document.querySelector(".hamburg-menu");

hamburgerBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  crossBtn.style.display = "flex";
  hamburgerBtn.style.display = "none";
});

crossBtn.addEventListener("click", () => {
  menu.style.display = "none";
  crossBtn.style.display = "none";
  hamburgerBtn.style.display = "flex";
});

//===========================================================================
// Main Switch and Panel Function
//===========================================================================
switchBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    switchBtn.forEach(b => b.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.target).classList.add("active");
    clearAll();
  });
});

//===========================================================================
// Global Variables
//===========================================================================
let currentNum = 0;
let convertedNum = 0;
let targetBase = 0;
let currentBase = 0;
let baseToConvert = 0;

//===========================================================================
// Base Button Function
//===========================================================================
Array.from(basaBtn).forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons in current panel
    const panel = btn.closest('.panel');
    if (panel) {
      panel.querySelectorAll('.baseBtn').forEach(b => b.classList.remove('active'));
    }
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Set target base
    baseChanger(btn.innerHTML);
  });
});

function baseChanger(base) {
  if (base === "BIN") {
    targetBase = 2;
  } else if (base === "OCT") {
    targetBase = 8;
  } else if (base === "HEX") {
    targetBase = 16;
  }
}

//===========================================================================
// Clear Button Function
//===========================================================================
Array.from(clearBtn).forEach((btn) => {
  btn.addEventListener("click", () => {
    clearAll();
  });
});

function clearAll() {
  // Reset global variables (NO 'let' keyword!)
  currentNum = 0;
  convertedNum = 0;
  targetBase = 0;
  currentBase = 0;
  baseToConvert = 0;
  
  // Clear input fields
  inputOne.value = "";
  inputTwo.value = "";
  inputThree.value = "";
  inputThebase.value = "";
  inputTobase.value = "";
  
  // Hide result divs
  resdivShow("none");
  
  // Clear math result containers
  const resOnefirst = document.getElementById("resOnefirst");
  const resOneSecond = document.getElementById("resOneSecond");
  const resTwoSfirst = document.getElementById("resTwoSfirst");
  
  if (resOnefirst) {
    resOnefirst.innerHTML = '<div class="first-part-div"><div class="div-first"><p class="divider-base">2</p><div class="div-second"><p class="the-number">0</p></div></div></div>';
  }
  if (resOneSecond) resOneSecond.innerHTML = '';
  if (resTwoSfirst) resTwoSfirst.innerHTML = '';
}

//===========================================================================
// Convert Button One (Decimal to Any Base)
//===========================================================================
convertBtnOne.addEventListener("click", () => {
  const input = inputOne.value.trim();
  
  // Validation
  if (!input) {
    showError(resultOne, "Please enter a number");
    return;
  }
  
  if (isNaN(input)) {
    showError(resultOne, "Invalid number format");
    return;
  }
  
  if (targetBase === 0) {
    showError(resultOne, "Please select a base (BIN/OCT/HEX)");
    return;
  }
  
  // Clear previous math results
  const resOnefirst = document.getElementById("resOnefirst");
  const resOneSecond = document.getElementById("resOneSecond");
  resOnefirst.innerHTML = '<div class="first-part-div"><div class="div-first"><p class="divider-base">2</p><div class="div-second"><p class="the-number">0</p></div></div></div>';
  resOneSecond.innerHTML = '';
  
  // Perform conversion
  currentNum = Number(input);
  convertedNum = currentNum.toString(targetBase).toUpperCase();
  
  resultOne.innerHTML = convertedNum;
  resultOne.style.color = "";
  resdivShow("flex");
  
  // Show math steps
  const mathResultOne = document.getElementById("mathResultOne");
  if (mathResultOne) {
    mathResultOne.style.display = "flex";
    decToAny(input, targetBase);
  }
});

//===========================================================================
// Convert Button Two (Any Base to Decimal)
//===========================================================================
convertBtnTwo.addEventListener("click", () => {
  const input = inputTwo.value.trim();
  
  // Validation
  if (!input) {
    showError(resultTwo, "Please enter a number");
    return;
  }
  
  if (targetBase === 0) {
    showError(resultTwo, "Please select a base (BIN/OCT/HEX)");
    return;
  }
  
  // Validate input for selected base
  if (!validateInputForBase(input, targetBase)) {
    showError(resultTwo, `Invalid input for base ${targetBase}`);
    return;
  }
  
  // Clear previous math results
  const resTwoSfirst = document.getElementById("resTwoSfirst");
  resTwoSfirst.innerHTML = '';
  
  // Perform conversion
  currentNum = input;
  convertedNum = anyToDec(currentNum, targetBase);
  
  resultTwo.innerHTML = convertedNum;
  resultTwo.style.color = "";
  resdivShow("flex");
});

//===========================================================================
// Convert Button Three (Any Base to Any Base)
//===========================================================================
convertBtnThree.addEventListener("click", () => {
  const input = inputThree.value.trim();
  const fromBase = parseInt(inputThebase.value);
  const toBase = parseInt(inputTobase.value);
  
  // Validation
  if (!input) {
    showError(resultThree, "Please enter a number");
    return;
  }
  
  if (!fromBase || fromBase < 2 || fromBase > 36) {
    showError(resultThree, "Current base must be between 2 and 36");
    return;
  }
  
  if (!toBase || toBase < 2 || toBase > 36) {
    showError(resultThree, "Target base must be between 2 and 36");
    return;
  }
  
  // Validate input for from base
  if (!validateInputForBase(input, fromBase)) {
    showError(resultThree, `Invalid input for base ${fromBase}`);
    return;
  }
  
  // Perform conversion
  currentBase = fromBase;
  baseToConvert = toBase;
  
  let decimalValue = convertToDecimal(input, currentBase);
  convertedNum = decimalValue.toString(baseToConvert).toUpperCase();
  
  resultThree.innerHTML = convertedNum;
  resultThree.style.color = "";
  resdivShow("flex");
});

//===========================================================================
// Helper Functions
//===========================================================================
function showError(element, message) {
  element.innerHTML = message;
  element.style.display = "flex";
  element.style.color = "red";
}

function validateInputForBase(input, base) {
  const validChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, base);
  const cleanInput = input.toUpperCase().replace('.', '');
  
  return cleanInput.split('').every(char => validChars.includes(char));
}

function resdivShow(display) {
  let resdiv = document.querySelectorAll(".result-box");
  Array.from(resdiv).forEach((resf) => {
    resf.style.display = display;
  });
}

//===========================================================================
// Converter Function (Panel Three)
//===========================================================================
function convertToDecimal(numStr, base) {
  const [integerPart, fractionalPart] = numStr.split('.');
  
  // Convert integer part
  let decimal = parseInt(integerPart, base);
  
  if (fractionalPart) {
    // Add fractional part
    for (let i = 0; i < fractionalPart.length; i++) {
      const digitValue = parseInt(fractionalPart[i], base);
      decimal += digitValue / Math.pow(base, i + 1);
    }
  }
  
  return decimal;
}

//===========================================================================
// Decimal to Any (First Panel)
//===========================================================================
function decToAny(numStr, base) {
  const [integerPart, fractionalPart] = numStr.split('.');
  
  const resOnefirst = document.getElementById("resOnefirst");
  const resOneSecond = document.getElementById("resOneSecond");
  
  // Clear previous content
  resOnefirst.innerHTML = '';
  resOneSecond.innerHTML = '';
  
  // Convert integer part
  let intValue = parseInt(integerPart);
  let loopCounter = 0;
  
  // Create initial division display
  let firstPartDiv = document.createElement("div");
  firstPartDiv.className = "first-part-div";
  resOnefirst.appendChild(firstPartDiv);
  
  let divFirst = document.createElement("div");
  divFirst.className = "div-first";
  firstPartDiv.appendChild(divFirst);
  
  let baseDivider = document.createElement("p");
  baseDivider.className = "divider-base";
  baseDivider.innerText = base;
  divFirst.appendChild(baseDivider);
  
  let divSecond = document.createElement("div");
  divSecond.className = "div-second";
  divFirst.appendChild(divSecond);
  
  let theNumber = document.createElement("p");
  theNumber.className = "the-number";
  theNumber.innerHTML = intValue;
  divSecond.appendChild(theNumber);
  
  // Perform division steps
  do {
    let remainder = intValue % base;
    intValue = Math.floor(intValue / base);
    
    loopCounter++;
    
    let stepDiv = document.createElement("div");
    stepDiv.className = "first-part-div";
    resOnefirst.appendChild(stepDiv);
    
    let divFirstStep = document.createElement("div");
    divFirstStep.className = "div-first";
    divFirstStep.style.marginLeft = (loopCounter * 10) + "px";
    stepDiv.appendChild(divFirstStep);
    
    let baseDividerStep = document.createElement("p");
    baseDividerStep.innerText = base;
    divFirstStep.appendChild(baseDividerStep);
    
    let divSecondStep = document.createElement("div");
    divSecondStep.className = "div-second";
    divFirstStep.appendChild(divSecondStep);
    
    let resultPara = document.createElement("p");
    resultPara.innerHTML = intValue + " → " + remainder;
    divSecondStep.appendChild(resultPara);
    
  } while (intValue > 0);
  
  // Convert fractional part if exists
  if (fractionalPart && fractionalPart !== "0") {
    let thenPara = document.createElement("p");
    thenPara.innerText = "Then (fractional part):";
    resOneSecond.appendChild(thenPara);
    
    let fractionalValue = parseFloat("0." + fractionalPart);
    let iterations = 0;
    const maxIterations = 8;
    
    while (iterations < maxIterations && fractionalValue > 0) {
      let product = fractionalValue * base;
      let integerPartOfProduct = Math.floor(product);
      
      let stepPara = document.createElement("p");
      stepPara.innerText = `${fractionalValue.toFixed(4)} × ${base} = ${product.toFixed(4)} → ${integerPartOfProduct}`;
      resOneSecond.appendChild(stepPara);
      
      fractionalValue = product - integerPartOfProduct;
      iterations++;
    }
  }
}

//===========================================================================
// Any to Decimal (Second Panel)
//===========================================================================
function anyToDec(numStr, base) {
  const [integerPart, fractionalPart] = numStr.split('.');
  const resTwoSfirst = document.getElementById("resTwoSfirst");
  
  // Clear previous results
  resTwoSfirst.innerHTML = '';
  
  let decimal = 0;
  let calculationStr = "";
  let resultStr = "";
  
  // Convert integer part
  for (let i = integerPart.length - 1; i >= 0; i--) {
    const digit = integerPart[integerPart.length - 1 - i];
    const digitValue = parseInt(digit, base);
    const power = i;
    const value = digitValue * Math.pow(base, power);
    
    calculationStr += `(${digit} × ${base}<sup>${power}</sup>) + `;
    resultStr += `${value} + `;
    decimal += value;
  }
  
  // Remove trailing " + "
  calculationStr = calculationStr.slice(0, -3);
  resultStr = resultStr.slice(0, -3);
  
  // Display integer conversion
  let calcPara = document.createElement("p");
  calcPara.innerHTML = `${integerPart}<sub>${base}</sub> = ${calculationStr}`;
  resTwoSfirst.appendChild(calcPara);
  
  let resultPara = document.createElement("p");
  resultPara.innerHTML = `= ${resultStr}`;
  resTwoSfirst.appendChild(resultPara);
  
  // Convert fractional part if exists
  if (fractionalPart) {
    let fractionalCalc = "";
    let fractionalResult = "";
    
    for (let i = 0; i < fractionalPart.length; i++) {
      const digit = fractionalPart[i];
      const digitValue = parseInt(digit, base);
      const power = -(i + 1);
      const value = digitValue * Math.pow(base, power);
      
      fractionalCalc += `(${digit} × ${base}<sup>${power}</sup>) + `;
      fractionalResult += `${value.toFixed(6)} + `;
      decimal += value;
    }
    
    fractionalCalc = fractionalCalc.slice(0, -3);
    fractionalResult = fractionalResult.slice(0, -3);
    
    let fracCalcPara = document.createElement("p");
    fracCalcPara.innerHTML = `0.${fractionalPart}<sub>${base}</sub> = ${fractionalCalc}`;
    resTwoSfirst.appendChild(fracCalcPara);
    
    let fracResultPara = document.createElement("p");
    fracResultPara.innerHTML = `= ${fractionalResult}`;
    resTwoSfirst.appendChild(fracResultPara);
  }
  
  // Final result
  let finalPara = document.createElement("p");
  finalPara.innerHTML = `<strong>${numStr}<sub>${base}</sub> = ${decimal}<sub>10</sub></strong>`;
  resTwoSfirst.appendChild(finalPara);
  
  return decimal;
}