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
let currentNum = 0;
let convertedNum = 0;
let targetBase = 0;
let currentBase = 0;
let baseToConvert = 0;
inputOne.value = inputTwo.value = inputThree.value = 0;
resdivShow("none");

}

// ===========================================================================
// Convert Button One (Decimal to Any Base)
// ===========================================================================
convertBtnOne.addEventListener("click",()=>{
  resdivShow ("flex");
  if(targetBase === 0){
    resultOne.innerHTML = "You don't Select the base";
  }else{
currentNum = Number(inputOne.value) ;
convertedNum = currentNum.toString(targetBase)
resultOne.innerHTML = convertedNum;
  }
});

// ===========================================================================
// Convert Button Two (Any Base to Decimal)
// ===========================================================================
convertBtnTwo.addEventListener("click",()=>{
resdivShow ("flex");
currentNum = inputTwo.value ;
convertedNum = convertToDecimal(currentNum,targetBase)
resultTwo.innerHTML = convertedNum;
});

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
// Converter Function
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


// console.log(convertToDecimal("1010",2))

function resdivShow (display){
  let resdiv = document.querySelectorAll(".result-box");
console.log(resdiv)
Array.from(resdiv).forEach((resf)=>{
resf.style.display = display;
})
}