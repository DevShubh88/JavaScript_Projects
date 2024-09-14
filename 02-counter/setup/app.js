// set initial count
let count = 0;

// select value and buttons
// instead of selecting three buttons individually select general class

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
console.log(btns); // it gives nodelist
// we can use forEach method on nodelist
btns.forEach((orange) => {
    orange.addEventListener("click", (e) => {
        const style = e.currentTarget.classList;
        console.log(style);
        if (style.contains("decrease")) {
            count--;
        }
        else if (style.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        else if (count < 0) {
            value.style.color = "red";
        }
        else {
            value.style.color = "black";
        }
        value.textContent = count;
    })
})


// here we have used three event listeners
// we can improve this 
/*
const decrease = document.querySelector(".decrease")
const reset = document.querySelector(".reset")
const increase = document.querySelector(".increase")

decrease.addEventListener("click", () => {
    let cnt = document.getElementById("value")
    console.log(cnt);
    cnt.textContent = --count;

})
reset.addEventListener("click", () => {
    let cnt = document.getElementById("value")
    console.log(cnt);
    cnt.textContent = 0;

})
increase.addEventListener("click", () => {
    let cnt = document.getElementById("value")
    console.log(cnt);
    cnt.textContent = ++count;
})
*/