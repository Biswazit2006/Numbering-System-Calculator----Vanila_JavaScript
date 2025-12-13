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
    console.log(activeBase);
    actionBtnDesabler(activeBase);
   
}

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

        // actionBtnDesabler(base);
    }else if(base===2){
        baseBtnBin.classList.add("active");
        activeBase = base;
        baseBtnDec.classList.remove("active");
        baseBtnHex.classList.remove("active");
        baseBtnOct.classList.remove("active");

        // actionBtnDesabler(base);
    }else if(base===16){
        baseBtnHex.classList.add("active");
        activeBase = base;
        baseBtnDec.classList.remove("active");
        baseBtnBin.classList.remove("active");
        baseBtnOct.classList.remove("active");

        // actionBtnDesabler(base);
    }else if(base === 8){
        baseBtnOct.classList.add("active");
        activeBase = base;
        baseBtnDec.classList.remove("active");
        baseBtnBin.classList.remove("active");
        baseBtnHex.classList.remove("active");
        
        // actionBtnDesabler(base);
    }else{
        return base;
    }
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
// Rander Input
function RanderInput(newNum){
    inputDec.value = newNum;
}
// actionBtnDesabler(activeBase);



// ------------------------------
// Main Action Buttons Function
// ------------------------------
inputDec.value = globalCalculation;
let actionButtons = document.querySelectorAll(".actionBtn");
console.log(actionButtons)
let actionButtonsArr = Array.from(actionButtons);

actionButtonsArr.forEach((btn)=>{
    console.log(btn)
    btn.addEventListener("click",(e)=>{
    globalCalculation = btn.innerHTML;
    RanderInput(globalCalculation)
    console.log(activeBase)
    })

})
