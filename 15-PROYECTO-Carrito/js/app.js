// variables para referenciar a objetos del documeto
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-curso tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


const agregarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log(e.target.classList);
    
}
}

const cargarEventListener = () => {
// Agregar funcion de carga de cursos al carrito
listaCursos.addEventListener('click', agregarCurso);
}

cargarEventListener();