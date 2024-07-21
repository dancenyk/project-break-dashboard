const passwordBtn = document.getElementById("passwordBtn")
const passwordGenContainer = document.querySelector(".passwordGenContainer")
const charactersLength = document.getElementById("charactersLength")



/*
passwordBtn.addEventListener("click",(evento)=>{
    evento.preventDefault();// pongo este evento para que la página no se recargue y envíe el form
    const length = parseInt(charactersLength.value)
    generatePassWord()
}); 


const generatePassWord = () => {
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    const minusculas = "abcdefghijklmnopqrstuvwxyz"; 
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+";
     
    let arrMay = mayusculas.split('');
    console.log(arrMay)
    //passwordGenContainer.innerHTML = `<span>${}</span>`;
}

generatePassWord()
*/

const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let arrMay = mayusculas.split('',3);
console.log(arrMay)

