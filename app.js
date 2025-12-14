// -------------------------
// DOM NODES
// -------------------------

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


// ------------------------------
// Global Variables
// ------------------------------
let activeBase = 10 ;
let globalCalculation = "0";
let inputBuffer = "";       // current number (base based)
let displayExpression = ""; // UI string: 5+101
let calcExpression = "";    // decimal only: 5+5


// -------------------------------
// Base Button Function
// -------------------------------
baseBtnDec.addEventListener("click",()=>baseBtnEventFunc(10))
baseBtnBin.addEventListener("click",()=>baseBtnEventFunc(2))
baseBtnHex.addEventListener("click",()=>baseBtnEventFunc(16))
baseBtnOct.addEventListener("click",()=>baseBtnEventFunc(8))

function baseBtnEventFunc(base){
    activeBase = base;
    baseBtnActiver(base);
    inputBuffer = "";
    console.log(activeBase);
    actionBtnDesabler(activeBase);
   
}

// ----------------------------
// Base Btn Activation function 
// ----------------------------
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


// --------------------------------
// Action Button Desable Function
// --------------------------------
function actionBtnDesabler(base){
    console.log("actionBtnDesabler(base):"+base)
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


    // buttonDesable(disableInDecMode);
    // func buttonDesable
    function buttonDesable(btnNodelist){
        buttonDesableRemover(disableInHexMode)
        Array.from(btnNodelist).forEach((btn)=>{
            btn.classList.add("disabled")
            // console.log(btn);
            
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
// Rander Input
function RanderInput(){
    decimalValue = Number(globalCalculation)
    inputDec.value = decimalValue.toString(10)
    inputBin.value = decimalValue.toString(2)
    inputHex.value = decimalValue.toString(16).toUpperCase();
    inputOct.value = decimalValue.toString(8);
}
RanderInput();
// actionBtnDesabler(activeBase);



// ------------------------------
// Main Action Buttons Function
// ------------------------------
inputDec.value = globalCalculation;
let actionButtons = document.querySelectorAll(".actionBtn");
// console.log(actionButtons)
let actionButtonsArr = Array.from(actionButtons);

actionButtonsArr.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
    if(btn.classList.contains("disabled")){
    return;
    }else{
    decimalActionBtnFunc(btn)
    // console.log(activeBase)
    }
    })

});

// Decimal Btn Fucn
function decimalActionBtnFunc(btn){
    if(btn.innerHTML === "="){
        eval(globalCalculation);
    }else if(btn.innerHTML === "AC"){
        console.log("AC")
    }else if(btn.innerHTML === "DEL"){
        console.log("DEL")
    }
    globalCalculation += btn.innerHTML;
    RanderInput()
     console.log(btn.classList.value)
}