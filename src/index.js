


const createImageNode = () => {
    const container = document.createElement('div')
    container.className = 'p-4';


    const image = document.createElement('img')
    image.className = 'mx-auto';
    image.width = '320';
    image.src = 'https://randomfox.ca/images/2.jpg'; //todo
    container.appendChild(image)

    return container;
}
const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images')
mountNode.appendChild(nuevaImagen)
 
