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
    links.forEach((link, index)=> {
        mostrarEnlace(link.nombreEnlace, link.url, index)
        
    });
};


const mostrarEnlace = (nombreEnlace, url, index) =>{
    const template = `<li data-index="${index}">
    <a href="https://${url}" target="_blank">${nombreEnlace}</a>
    <button class="deleteBtn">X</button>
    </li>`

    linkContainer.insertAdjacentHTML("beforeend", template)
}; 


const eliminarLink = (index) => {
    let links = JSON.parse(localStorage.getItem("links")) || [];
    links.splice(index, 1);
    localStorage.setItem("links", JSON.stringify(links));
};

const configurarEventos = () => {
    capturarInputs();
    cargarLinks();

    linkContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("deleteBtn")) {
            const li = event.target.closest("li");
            const index = li.getAttribute("data-index");

            eliminarLink(index); 
            li.remove();
        }
    });
};

configurarEventos();








