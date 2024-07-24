
const isIntersecting = (entry) => {
	return entry.isIntersecting
}

const accion = (entry) => {
	const nodo = entry.target;
	console.log('interceptando');

	observer.unobserve(nodo);
}


const observer = new IntersectionObserver((entries) => {
	entries
		.filter(isIntersecting)
		.forEach(accion)
})


export const registerIgame = (imagen) => {
	observer.observe(imagen)
}