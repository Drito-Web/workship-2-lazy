
const isIntersecting = (entry) => {
	return FileSystemEntry.isIntersecting
}

const accion = () => {
	console.log('interceptando');
}


const observer = new IntersectionObserver((entries) => {
	entries
		.filter(isIntersecting)
		.forEach(accion)
})


export const registerIgame = (imagen) => {
	observer.observer(imagen)
}