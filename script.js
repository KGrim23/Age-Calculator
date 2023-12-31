
let calculateBtn = document.getElementById("calculateBtn")


calculateBtn.addEventListener("click", () => {
    let userInput = document.getElementById("birthYear");
    let resultdiv = document.getElementById("result");



    let birthYear = parseInt(userInput.value);
    if (isNaN(birthYear)){
        resultdiv.innerHTML = "<p> Please enter a valid birth year!</p>";
        return;
    } 

    let currentYear = new Date().getFullYear();
    let result = currentYear - birthYear;
 

    resultdiv.innerHTML = "<p><span id='resultColor'>You are " + result + " years old.</span></p>";
    let resultColorSpan = document.getElementById("resultColor");
    resultColorSpan.style.color = "blue";
    
});