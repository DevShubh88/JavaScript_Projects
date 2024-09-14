const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// we have to generate #f15025 like this
const btn = document.getElementById("btn");
console.log(btn);
const color = document.querySelector(".color")
console.log(color);

// btn.addEventListener("click", function(){
//     let hexColor = '#';
//     for(i=0; i<6; i++){
//         hexColor += getRandomNumber();
//     }
//     color.textContent = hexColor;
//     document.body.style.backgroundColor = hexColor;
// })

// function getRandomNumber(){
//     return hex[Math.floor(Math.random() * hex.length)];
// }

btn.addEventListener("click", () => {
    let hexColor = '#';
    for(let i=0; i<6; i++){
        hexColor += getRandomNumber();
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

const getRandomNumber = () => hex[Math.floor(Math.random() * hex.length)];
