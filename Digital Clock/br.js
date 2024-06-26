let time = document.querySelector(".main h3");
let btn = document.querySelector("button");

let today = new Date().toLocaleDateString();

setInterval(()=>{
    let clock = new Date().toLocaleTimeString();
    time.innerText = clock;
}, 1000);

btn.addEventListener("click",()=>{
    time.innerText = today;
    
})