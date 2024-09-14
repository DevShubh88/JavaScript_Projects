const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

console.log(color);
console.log(btn);

// btn.addEventListener("click", function(){
//     // get random number from 0-3 from colors array
//     const randomNumber = getRandomNumber();
//     console.log(randomNumber);
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];
//     console.log(color.textContent);
// })

// function getRandomNumber(){
//     return Math.floor(Math.random() * colors.length);
// }

btn.addEventListener("click", (e) => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})