const linkBtn = document.getElementById("linkBtn")
const linkContainer = document.querySelector(".linkContainer")
const nombreEnlaceInput = document.getElementById("nombreEnlace")
const urlInput = document.getElementById("url")


const capturarInputs = () =>{
    linkBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    
    const nombreEnlace = nombreEnlaceInput.value; 
    const url = urlInput.value

        if(nombreEnlace && url){
            guardarLocal(nombreEnlace, url);
            mostrarEnlace(nombreEnlace,url);
            nombreEnlaceInput.value ="";
            urlInput.value = "";
        }      
    }); 
};

capturarInputs()

const guardarLocal = (nombreEnlace, url) =>{
    let links = JSON.parse(localStorage.getItem("links")) || [];
    links.push({nombreEnlace, url});
    localStorage.setItem("links", JSON.stringify(links));
};


const cargarLinks = () =>{
    let links = JSON.parse(localStorage.getItem("links")) || [];
    links.forEach(link => {
        mostrarEnlace(link.nombreEnlace, link.url)
        
    });
};


const mostrarEnlace = (nombreEnlace, url) =>{
    const template = `<li><a href="http://${url}" target="_blank">${nombreEnlace}</a></li>`

    linkContainer.insertAdjacentHTML("beforeend", template)
}; 

cargarLinks()








