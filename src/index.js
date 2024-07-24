import { registerIgame } from './lazy';



const minimun = 1;
const maximun = 122;
const randon = () => Math.floor(Math.random() * (maximun - minimun)) + minimun;

const createImageNode = () => {
    const container = document.createElement('div')
    container.className = 'p-4';


    const imagen = document.createElement('img')
    imagen.className = 'mx-auto';
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${randon()}.jpg`; //todo

    container.appendChild(imagen)

    return container;
}
const mountNode = document.getElementById('images')

const addButton = document.querySelector('button')
const getImage = () => {
    const newImge = createImageNode();
    mountNode.append(newImge)
    registerIgame(newImge)
    
}
addButton.addEventListener('click', getImage);


