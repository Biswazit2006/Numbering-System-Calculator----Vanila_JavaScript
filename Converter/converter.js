//   DOM
  const switchBtn = document.querySelectorAll(".switch-btn");
  const panels = document.querySelectorAll(".panel");
  const basaBtn = document.querySelectorAll(".baseBtn");
  const convertBtn = document.querySelectorAll(".convert-btn");


// ===========================================================================
// Main Switch and Panel DUnction
// ===========================================================================
  switchBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      switchBtn.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
    });
  });
// ===========================================================================
// Globsl Variables
// ===========================================================================
let currentNum ;
let convertedNum;
let currentBase = 10;
let baseToConvert = 2;
// ============================================================================
// Base Btn Function
// ===========================================================================
Array.from(basaBtn).forEach((btn)=>{

})

console.log(convertBtn)