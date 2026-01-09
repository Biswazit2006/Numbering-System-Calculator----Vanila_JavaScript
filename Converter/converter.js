//=====================================================
// DOM
// ====================================================
  const switchBtn = document.querySelectorAll(".switch-btn");
  const panels = document.querySelectorAll(".panel");
  const basaBtn = document.querySelectorAll(".baseBtn");
  const clearBtn = document.querySelectorAll(".clearBtn");

  // input Field
  const inputOne = document.getElementById("inputOne");
  const inputTwo = document.getElementById("inputTwo");
  const inputThree = document.getElementById("inputThree");

  const inputThebase = document.getElementById("inputThebase");
  const inputTobase = document.getElementById("inputTobase");

  // Convert Buttons
  const convertBtnOne = document.getElementById("convertBtnOne")
  const convertBtnTwo = document.getElementById("convertBtnTwo")
  const convertBtnThree = document.getElementById("convertBtnThree")

  // Result field
  const resultOne = document.getElementById("resultOne");
  const resultTwo = document.getElementById("resultTwo");
  const resultThree = document.getElementById("resultThree");

  // Others
  // const mathResultOne = document.getElementById("mathResultOne");

//=====================================================
// Navbar Hamburg Function
// ====================================================
const hamburgerBtn = document.getElementById("hamburg")
const crossBtn = document.getElementById("cross")
const menu = document.querySelector(".hamburg-menu");

hamburgerBtn.addEventListener("click",()=>{
    menu.style.display = "flex";
    crossBtn.style.display = "flex";
    hamburgerBtn.style.display = "none";
});
crossBtn.addEventListener("click",()=>{
    menu.style.display = "none";
    crossBtn.style.display = "none";
    hamburgerBtn.style.display = "flex";
});


// ===========================================================================
// Main Switch and Panel Function
// ===========================================================================
  switchBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      switchBtn.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
      clearAll();
    });
  });
// ===========================================================================
// Global Variables
// ===========================================================================
let currentNum = 0;
let convertedNum = 0;
let targetBase = 0;

let currentBase = 0;
let baseToConvert = 0;
// ===========================================================================
// Base Btn Function
// ===========================================================================
Array.from(basaBtn).forEach((btn)=>{
    btn.addEventListener("click",()=>{
      // console.log(btn.innerHTML)
      baseChanger(btn.innerHTML)
      console.log(targetBase)
    })
});
function baseChanger(base){
  if(base == "BIN"){
    targetBase = 2;
  }else if(base == "OCT"){
    targetBase = 8;
  }else if(base == "HEX"){
    targetBase = 16;
  }else{
    return
  }
}

// ===========================================================================
// Clear Button function
// ===========================================================================
Array.from(clearBtn).forEach((btn)=>{
    btn.addEventListener("click",()=>{
      clearAll()
    })
});
function clearAll(){
  currentNum = 0;  // Updates global variable
  convertedNum = 0;
  targetBase = 0;
  currentBase = 0;
  baseToConvert = 0;
  inputOne.value = "";
  inputTwo.value = "";
  inputThree.value = "";
  inputThebase.value = "";
  inputTobase.value = "";
  resdivShow("none");
  
  // Clear generated math results
  document.getElementById("resOnefirst").innerHTML = "";
  document.getElementById("resOneSecond").innerHTML = "";
  document.getElementById("resTwoSfirst").innerHTML = "";

}

// ===========================================================================
// Convert Button One (Decimal to Any Base)
// ===========================================================================
convertBtnOne.addEventListener("click",()=>{
  resdivShow ("flex");

  //  if(!input || isNaN(input)){
  //   resultOne.innerHTML = "Please enter a valid number";
  //   resultOne.style.display = "flex";
  //   return;
  // }

  if(targetBase === 0){
    resultOne.innerHTML = "You don't Select the base";
  }else{
currentNum = Number(inputOne.value) ;
convertedNum = currentNum.toString(targetBase)
resultOne.innerHTML = convertedNum;
mathResultOne.style.display = "flex";
decToAny(inputOne.value,targetBase);
  }
});

// ===========================================================================
// Convert Button Two (Any Base to Decimal)///////////////////////////////////
// ===========================================================================
convertBtnTwo.addEventListener("click",()=>{
  resdivShow ("flex");
  if(targetBase === 0){
    resultTwo.innerHTML = "You don't Select the base";
  }else{

  // convertedNum = currentNum.toString(targetBase)
  // resultOne.innerHTML = convertedNum;  
  }
  currentNum = inputTwo.value ;
  console.log(currentNum)
  console.log(targetBase)
  convertedNum = anyToDec(currentNum,targetBase);
  console.log(convertedNum)
  resultTwo.innerHTML = convertedNum;
})
// ===========================================================================
// Convert Button Three (Any Base to Any Base)
// ==========================================================================
convertBtnThree.addEventListener("click",()=>{
  resdivShow ("flex");
  if(inputThebase.value == 0 || inputTobase.value == 0 ){
    resultThree.innerHTML = "You don't Select the base";
  }else{
    currentBase = inputThebase.value ;
    baseToConvert = inputTobase.value ;
    
    let varRes = convertToDecimal(inputThree.value ,currentBase)
    convertedNum = varRes.toString(baseToConvert);
    resultThree.innerHTML = convertedNum;
    
  }
})


// ===========================================================================
// Converter Function (panel three)
// ===========================================================================
function convertToDecimal(numStr, base) {
  const [integerPart, fractionalPart] = numStr.split('.');
  
  // Convert integer part using parseInt
  let decimal = parseInt(integerPart, base);
  
  if (fractionalPart) {
    // Add each fractional digit: digit * base^-n
    for (let i = 0; i < fractionalPart.length; i++) {
      const digitValue = parseInt(fractionalPart[i], base);
      decimal += digitValue / Math.pow(base, i + 1);
    }
  }
  return decimal;
};

// ---------------------------------------------------------------------------
// Decemal To any (First panel )
// --------------------- ------------------------------------------------------
function decToAny(numStr,base){
  const [integerPart, fractionalPart] = numStr.split('.');
    // Convert integer part using parseInt 
  let x = document.querySelector(".divider-base").innerHTML = base;
  let y = document.querySelector(".the-number").innerHTML = integerPart ;
  let i = Number(integerPart);
  let loopCounter = 1;
  a = i % base;
  do {
    i = Math.floor(i/base) ;

  let firstPartDiv = document.createElement("div");
  firstPartDiv.className = "first-part-div";
  resOnefirst.appendChild(firstPartDiv)

    let divFirst = document.createElement("div");
    divFirst.className = "div-first";
    firstPartDiv.appendChild(divFirst);

    let baseDivider = document.createElement("p");
    baseDivider.innerText = base;
    divFirst.appendChild(baseDivider);
    
    let divSecond = document.createElement("div");
    divSecond.className = "div-second";
    let margin = Number(loopCounter*10).toString() ;
    divFirst.style.marginLeft = margin + "px" ;
    divFirst.appendChild(divSecond);

    let diviRes = document.createElement("P");
    diviRes.innerHTML = i + "→" + a;
    divSecond.appendChild(diviRes);

    a = i % base;
    loopCounter ++;       
}while (i >0);

// Convert integer part using parseInt 
let nmLenth = Number(fractionalPart.length );
let floatdiviNum = "1";
for (let i = 1; i <= nmLenth; i++) {
  floatdiviNum += "0";
}
let fractionalNum = Number(fractionalPart) / Number(floatdiviNum);

let inf = 1;
let mainnNum = fractionalNum;
while( inf < 8){
  let res = mainnNum * base;

  let secPera = document.createElement("p");
  secPera.innerText = `${mainnNum.toFixed(2)} × ${base } = ${res.toFixed(2)}`;
  resOneSecond.appendChild(secPera);
  const [a, b] = res.toString().split('.');
  mainnNum = Number(res) - Number(a);
  inf++;   
}

}
// ---------------------------------------------------------------------------
// Any to Decimal (Second panel )
// ---------------------------------------------------------------------------
function anyToDec(numStr, base){
  // Split the input into integer and fractional parts
  const [integerPart, fractionalPart] = numStr.split('.');
  // Clear any previous results
  resTwoSfirst.innerHTML = '';
  // Variable to hold the decimal result
  let decimal = 0;
  let decimalStr = `${integerPart}=`;
  let decimalStrTwo = "→"

  for (let i = integerPart.length - 1; i >= 0; i--) { 
    const digitValue = integerPart[integerPart.length - 1 - i] .match(/[0-9A-F]/i) ? parseInt(integerPart[integerPart.length - 1 - i], base) : 0;

    let varDecStr = `(${digitValue.toString()} × ${base.toString()} <sup> ${i.toString()} </sup> )+ `;
    decimalStr+= varDecStr ;
    decimalStrTwo+=digitValue * Math.pow(base, i) + " + ";
    decimal += digitValue * Math.pow(base, i);
  }

    if (fractionalPart && fractionalPart.length > 0) {
      let fractional = 0 ;
      let fractionalStr = "";
      let fractionalStrTwo = "";
    // Add each fractional digit: digit * base^-n
    for (let i = 1; i < fractionalPart.length + 1; i++) {
      const digitValue = parseInt(fractionalPart[i-1], base);
      fractionalStr += `(${digitValue.toString()} × ${base.toString()} <sup> -${i.toString()} </sup> )+ `;
      decimal += digitValue / Math.pow(base, i + 1);
      fractional += digitValue / Math.pow(base, i);
      fractionalStrTwo+= digitValue / Math.pow(base, i) + " + ";
    }
    let finalStr = decimalStr + fractionalStr ;
    finalStr = finalStr.slice(0, -2); // Remove the last ' + '
    let finalPera = document.createElement("p");
    finalPera.innerHTML = finalStr;
    resTwoSfirst.appendChild(finalPera);
    
    let finalStrTwo = decimalStrTwo + fractionalStrTwo ;
    finalStrTwo = finalStrTwo.slice(0, -2); // Remove the last ' + '
    let finalPeraTwo = document.createElement("p");
    finalPeraTwo.innerHTML = finalStrTwo;
    resTwoSfirst.appendChild(finalPeraTwo);
    let fres = document.createElement("p");
    fres.innerHTML =`(${integerPart})<sub> ${10}</sub>= (${decimal})<sub> ${base}</sub>` ;
    resTwoSfirst.appendChild(fres);
    
    
  }else{
  let decimalPera = document.createElement("p");
  decimalStr = decimalStr.slice(0, -2); // Remove the last ' + '
  decimalPera.innerHTML = decimalStr;
  resTwoSfirst.appendChild(decimalPera);

  let decimalPeraTwo = document.createElement("p");
  decimalStrTwo = decimalStrTwo.slice(0, -2); // Remove the last ' + '
  decimalPeraTwo.innerHTML = decimalStrTwo;
  resTwoSfirst.appendChild(decimalPeraTwo);
  let fres = document.createElement("p");
  fres.innerHTML =`(${integerPart})<sub> ${10}</sub>= (${decimal})<sub> ${base}</sub>` ;
  resTwoSfirst.appendChild(fres);
  }
  return decimal;

}


// ===========================================================================
// Others Function
// ===========================================================================
function resdivShow (display){
  let resdiv = document.querySelectorAll(".result-box");
console.log(resdiv)
Array.from(resdiv).forEach((resf)=>{
resf.style.display = display;
})
}