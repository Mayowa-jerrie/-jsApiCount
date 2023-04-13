const count = document.querySelector(".count");
const subtract = document.querySelector(".subtract");
const addition = document.querySelector(".addition");
const resetCount = document.querySelector(".reset");

addition.addEventListener("click",()=>{
    count.innerHTML++;
});
resetCount.addEventListener("click",()=>{
    count.innerHTML = 0;
});
subtract.addEventListener("click",()=>{
    count.innerHTML--;
});
