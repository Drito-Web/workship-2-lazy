// const { doc } = require("prettier");

const minimun = 1;
const maximun = 122;
const randon = () => Math.floor(Math.random() * (maximun - minimun)) + minimun;

const createImageNode = () => {
    const container = document.createElement('div')
    container.className = 'p-4';


    const imagen = document.createElement('img')
    imagen.className = 'mx-auto';
    imagen.width = '320';
    imagen.src = `https://randomfox.ca/images/${randon()}.jpg`; //todo

    container.appendChild(imagen)

    return container;
}
// const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images')

// mountNode.append(nuevaImagen);

const addButton = document.querySelector('button')
const getImage = () => {
    console.log('hey');
    const newImge = createImageNode();
    mountNode.append(newImge)
}
addButton.addEventListener('click', getImage);


