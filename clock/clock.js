const hourContainer = document.getElementById("hourContainer")
const dateContainer = document.getElementById("dateContainer")
const clockPhrase = document.getElementById("clockPhrase")
const date = new Date()

const fullHour = () =>{
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

   const hourFormated = `${hour}:${minutes}:${seconds}`
   hourContainer.innerHTML = hourFormated

   if((hour > 0  || (hour === 0 && minutes >0))  && (hour < 7 || (hour === 7 && minutes ===0))){
    clockPhrase.innerText = "Es hora de descansar. Apaga y sigue mañana"
    }else if((hour > 7  || (hour === 7 && minutes >0))  && (hour <12 || (hour === 12 && minutes ===0))){
        clockPhrase.innerText = "Buenos días, desayuna fuerte y a darle al código"
    }else if((hour > 12  || (hour === 12 && minutes >0))  && (hour <14 || (hour === 14 && minutes ===0))){
        clockPhrase.innerText = "Echa un rato más pero no olvides comer"
    }else if((hour > 14  || (hour === 14 && minutes >0))  && (hour <16 || (hour === 16 && minutes ===0))){
        clockPhrase.innerText = "Espero que hayas comido"    
    }else if((hour > 16  || (hour === 16 && minutes >0))  && (hour <18 || (hour === 18 && minutes ===0))){
        clockPhrase.innerText = "Buenas tardes, el último empujón..." 
    }else if((hour > 18  || (hour === 18 && minutes >0))  && (hour <22 || (hour === 22 && minutes ===0))){
        clockPhrase.innerText = "Esto ya son horas extras, ... piensa en parar pronto"  
    }else{
        clockPhrase.innerText = "Buenas noches, es hora de pensar en parar y descansar"
   }
}; 

setInterval(fullHour,1000)


const fullDate = () =>{
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    let dateFormated = `${day}/${month}/${year}`
    dateContainer.innerHTML = dateFormated
    return dateFormated; 
}

fullDate(date)

