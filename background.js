// Obtengo la ruta correcta a las imágenes dependiendo de la ubicación actual
const getImgPath = (img) => {
    // Verifico si estamos en alguna de las subcarpetas
    const subfolders = ["/link/", "/password/", "/weather/", "/clock/"];
    const isSubfolder = subfolders.some(subfolder => window.location.pathname.includes(subfolder));
    return isSubfolder ? `../img/${img}` : `img/${img}`;
};

const imgs = [
    getImgPath("1.jpg"),
    getImgPath("2.jpg"),
    getImgPath("3.jpg"),
    getImgPath("4.jpg"),
    getImgPath("5.jpg"),
    getImgPath("6.jpg"),
    getImgPath("7.jpg"),
    getImgPath("8.jpg"),
    getImgPath("9.jpg")
];
const changeImgs = () =>{
    const randomIndex = Math.floor(Math.random()* imgs.length); 
    const aleatoriaImg = imgs[randomIndex];
    document.body.style.backgroundImage = `url('${aleatoriaImg}')`;
}

changeImgs();
setInterval(changeImgs, 15000); 