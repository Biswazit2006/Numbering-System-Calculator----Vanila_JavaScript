// =======================================================
// DOM NODES
// =======================================================
// Buttons node
const baseBtnDec = document.getElementById("baseBtnDec");
const baseBtnBin = document.getElementById("baseBtnBin");
const baseBtnHex = document.getElementById("baseBtnHex");
const baseBtnOct = document.getElementById("baseBtnOct");

// Display Nodes
const inputDec = document.getElementById("inputDec");
const inputBin = document.getElementById("inputBin");
const inputHex = document.getElementById("inputHex");
const inputOct = document.getElementById("inputOct");

// Others
const acBtnMoble = document.getElementById("acBtnMoble")


//=====================================================
// Global Variables
// ====================================================
let activeBase = 10;
let globalDecCalculation = "";
let globalDecimalStr ="";
let currentExpresion = "";
let prevNum = "";
let currentCalculation = "";


// =====================================================
// Base Button Function
// =====================================================
baseBtnDec.addEventListener("click",()=>baseBtnEventFunc(10))
baseBtnBin.addEventListener("click",()=>baseBtnEventFunc(2))
baseBtnHex.addEventListener("click",()=>baseBtnEventFunc(16))
baseBtnOct.addEventListener("click",()=>baseBtnEventFunc(8))

function baseBtnEventFunc(base){
    activeBase = base;
    baseBtnActiver(base);
    inputBuffer = "";
    actionBtnDesabler(activeBase);  
}

// ==================================================
// Base Btn Activation function 
// ==================================================
function baseBtnActiver(base){
    [baseBtnDec,baseBtnBin,baseBtnHex,baseBtnOct].forEach((btn)=>{
        btn.classList.remove("active");
    });
    if(base=== 10){
        baseBtnDec.classList.add("active");
        activeBase = base;
    }else if(base===2){
        baseBtnBin.classList.add("active");
        activeBase = base;
    }else if(base===16){
        baseBtnHex.classList.add("active");
        activeBase = base;
    }else if(base === 8){
        baseBtnOct.classList.add("active");
        activeBase = base;
    }else{
        return base;
    };
} 


//===================================================
// Action Button Desable Function
// ==================================================
function actionBtnDesabler(base){
    // Button Group need to desable
    disableInDecMode = document.querySelectorAll(".disableInDecMode"); //ClassName= disableInDecMode
    disableInBinMode = document.querySelectorAll(".disableInBinMode"); //className = disableInBinMode
    disableInHexMode = document.querySelectorAll(".disableInHexMode"); //className = disableInHexMode
    disableInOctMode = document.querySelectorAll(".disableInOctMode"); //className = disableInOctMode
    if(base === 10){
        buttonDesable(disableInDecMode);
    } else if (base === 2){
        buttonDesable(disableInBinMode);
    } else if (base === 16){
        buttonDesableRemover(disableInHexMode);
    }else if (base === 8){
        buttonDesable(disableInOctMode);
    }else{
        return;
    }
    // func buttonDesable
    function buttonDesable(btnNodelist){
        buttonDesableRemover(disableInHexMode)
        Array.from(btnNodelist).forEach((btn)=>{
            btn.classList.add("disabled")
        })
    };
    // Func buttonDesable Remover;
    function buttonDesableRemover(btnNodelist){
        Array.from(btnNodelist).forEach((btn)=>{
            btn.classList.remove("disabled")
        })
    };

}
actionBtnDesabler(activeBase);


// ==================================================
// Rander Input Function
//===================================================
function RanderInput(){
    if(globalDecCalculation == ""){
        decimalValue = 0;
    }else{
    decimalValue = Number(parseFloat(globalDecCalculation))
    };
    inputDec.value = decimalValue.toString(10);
    inputBin.value = decimalValue.toString(2);
    inputHex.value = decimalValue.toString(16).toUpperCase();
    inputOct.value = decimalValue.toString(8);
}
RanderInput();



// ================================================
// Main Action Buttons Function
// ================================================
inputDec.value = globalDecCalculation;
let actionButtons = document.querySelectorAll(".actionBtn");
let actionButtonsArr = Array.from(actionButtons);

actionButtonsArr.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
    if(btn.classList.contains("disabled")){
    return;
    }else{
         actionBtnFunc(btn)
    }
    })
});
// ----------------------------------------------------
// Action Btn Function
// ----------------------------------------------------
function actionBtnFunc(btn){
       if(btn.innerHTML === "="){
        globalDecimalStr += globalDecCalculation;
        equalToBtnFunc()
    }else if(btn.innerHTML == "AC"){
        globalDecCalculation = "";
        globalDecimalStr = "";
        currentCalculation = "";
        prevNum = "";
        currentExpresion ="";
        RanderInput()
    }else if(btn.innerHTML == "DEL"){
        currentCalculation = currentCalculation.slice(0, -1);
        globalDecCalculation = currentCalculation;
        RanderInput();
    }else if(btn.classList.contains("expretionBtn")){
        currentExpresion = "";
        currentExpresion = btn.innerHTML;
        // equalToBtnFunc()
       prevNum = globalDecCalculation;
       globalDecimalStr += globalDecCalculation;
       globalDecimalStr += btn.innerHTML;
       globalDecCalculation = "";
       currentCalculation = "";
       RanderInput();
    
    }else{
    currentCalculation += btn.innerHTML;
    globalDecCalculation = convertToDecimal(currentCalculation,activeBase); 
    RanderInput()
    } 
}

// Equal Btn calcualtion 
function equalToBtnFunc(){
    let equalTo = eval(globalDecimalStr);
    globalDecCalculation = equalTo;
    RanderInput(equalTo);
    globalDecimalStr ="";
    currentExpresion = "";
}





// ===========================================
// Converter Function
// ===========================================
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
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Others Code
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Mobile view Del Button
acBtnMoble.addEventListener("click",()=>{
        currentCalculation = currentCalculation.slice(0, -1);
        globalDecCalculation = currentCalculation;
        RanderInput();
})

document.onkeydown = function (e) {
    return false;
};