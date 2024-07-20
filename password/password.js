const passwordBtn = document.getElementById("passwordBtn")
const passwordGenContainer = document.getElementById("passwordGenContainer")
const charactersLength = document.getElementById("charactersLength")
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const minusculas = "abcdefghijklmnopqrstuvwxyz"; 
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+";

const valor = parseInt(charactersLength.value)
console.log(valor)




passwordBtn.addEventListener("click",()=>{
    console.log("test")
    let text = "que"
    passwordGenContainer.innerText = text
})


