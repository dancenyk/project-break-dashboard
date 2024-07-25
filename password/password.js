
const passwordBtn = document.getElementById("passwordBtn")
const passwordGenContainer = document.querySelector(".passwordGenContainer")
const charactersLength = document.getElementById("charactersLength")

passwordBtn.addEventListener("click",(evento)=>{
    evento.preventDefault();// pongo este evento para que la página no se recargue y envíe el form
    const valueLenght = parseInt(charactersLength.value)
    const strpassword = generatePassWord(valueLenght)
    imprimirPassword(strpassword)
}); 

const generatePassWord = (longitud) => {
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    const minusculas = "abcdefghijklmnopqrstuvwxyz"; 
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+";

    const allCharacters = mayusculas+minusculas+numbers+symbols

    const aleatorioMay = mayusculas[Math.floor(Math.random() * mayusculas.length)];
    const aleatorioMin = minusculas[Math.floor(Math.random() * minusculas.length)]; 
    const aleatorioNum = numbers[Math.floor(Math.random() * numbers.length)];
    const aleatorioSym = symbols[Math.floor(Math.random() * symbols.length)]; 
    
    console.log(aleatorioMay, aleatorioMin, aleatorioNum, aleatorioSym)
    
    const password = [aleatorioMay,aleatorioMin,aleatorioNum,aleatorioSym]
       
        for(let i = 0; i<longitud-4; i++)  {
          const aleatorioAll = allCharacters[Math.floor(Math.random() * allCharacters.length)]; 
          password.push(aleatorioAll)
        }   
        const strpassword =password.join("")
        console.log(strpassword)
        return strpassword   
    }; 

    generatePassWord()


 const imprimirPassword = (strpassword) =>{
    
   passwordGenContainer.innerHTML = 
   `<p>Contraseña generada:</p>
   <span>${strpassword}</span>`;
 }


