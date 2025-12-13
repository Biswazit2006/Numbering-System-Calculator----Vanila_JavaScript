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
let activeBase = "10";
let globalCalculation = "00"


// ------------------------------
// Main Action Buttons Function
// ------------------------------
inputDec.value = globalCalculation;
let actionButtons = document.querySelectorAll("button");
let actionButtonsArr = Array.from(actionButtons);
actionButtonsArr.forEach((btn)=>{

    btn.addEventListener("click",(e)=>{
    globalCalculation = btn.innerHTML;
    RanderInput(globalCalculation)
    })

})


console.log(actionButtons);
console.log(Array.from(actionButtons))



// -------------------------------
// Base Button Activation Function
// -------------------------------
// Event Listeners
baseBtnDec.addEventListener("click",()=>baseBtnActiver(10))
baseBtnBin.addEventListener("click",()=>baseBtnActiver(2))
baseBtnHex.addEventListener("click",()=>baseBtnActiver(16))
baseBtnOct.addEventListener("click",()=>baseBtnActiver(8))

// ----------------------------
// Base Btn Activation function 
// ----------------------------
function baseBtnActiver(base){
    if(base=== 10){
        baseBtnDec.classList.add("active");
        activeBase = base;
        baseBtnBin.classList.remove("active");
        baseBtnHex.classList.remove("active");
        baseBtnOct.classList.remove("active");
    }else if(base===2){
        baseBtnBin.classList.add("active");
        activeBase = base;
        baseBtnDec.classList.remove("active");
        baseBtnHex.classList.remove("active");
        baseBtnOct.classList.remove("active");
    }else if(base===16){
        baseBtnHex.classList.add("active");
        activeBase = base;
        baseBtnDec.classList.remove("active");
        baseBtnBin.classList.remove("active");
        baseBtnOct.classList.remove("active");
    }else if(base === 8){
        baseBtnOct.classList.add("active");
        activeBase = base;
        baseBtnDec.classList.remove("active");
        baseBtnBin.classList.remove("active");
        baseBtnHex.classList.remove("active");      
    }else{
        return base;
    }
} 
// --------------------------------
// Action Button Desable Function
// --------------------------------
function actionBtnDesabler(base){
    // Button Group need to desable
    charBtn = document.querySelectorAll(".charBtn") //ClassName= charbtn
    disableInBinMode = document.querySelectorAll(".disableInBinMode")   //className = disableInBinMode


    buttonDesable(charBtn);
    // func
    function buttonDesable(btnNodelist){
        Array.from(btnNodelist).forEach((btn)=>{
            btn.classList.add("down")
        })
    };
}
actionBtnDesabler(2)


let str = "10*10";
console.log(str)
console.log(eval(str))

// Rander Input
function RanderInput(newNum){
    inputDec.value = newNum;
}

charBtn = document.querySelectorAll(".charBtn")
console.log(charBtn)
// charBtn.classList.add("desable")