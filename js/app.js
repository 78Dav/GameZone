window.addEventListener("load", () => {
    document.querySelector(".menuBtn").addEventListener("click", () => {
        document.querySelector(".navMenu").classList.toggle("show");
    });

    // Agregar evento para el menú desplegable de Categorias
    document.querySelector(".dropdown").addEventListener("click", () => {
        document.querySelector(".dropdown-content").classList.toggle("show");
    });
});


console.log("funcionando");

let juegos = []

const addJuego = (juego) => {
    juegos.push(juego);
}
function modal(event) {
    event.preventDefault();
    const codigoUnico = document.getElementById("inputCodigoUnico");
    const nombre = document.getElementById("inputNombre");
    const categoria = document.getElementById("inputCategoria");
    const estado = document.getElementById("inputEstado");
    const descripcion = document.getElementById("inputDescripcion");
    const favorito = document.getElementById("inputFavorito");

    // Agregar una estrella si el juego es favorito
    const favoritoIcon = favorito.value.toLowerCase() === 'si' ? '<i class="fas fa-star"></i>' : '';

    addJuego({
        codigoUnico: codigoUnico.value,
        nombre: nombre.value,
        categoria: categoria.value,
        estado: estado.value,
        descripcion: descripcion.value,
        favorito: `${favorito.value} ${favoritoIcon}`, // Incluir la estrella en la columna "Favorito"
    });

    localStorage.setItem("listaJuegos", JSON.stringify(juegos));
    cargarLS();

    // Limpiar los campos del formulario
    codigoUnico.value = "";
    nombre.value = "";
    estado.value = "";
    categoria.value = "";
    descripcion.value = "";
    favorito.value = "";
}


function deleteJuego(index) {
    juegos.splice(index, 1);
    localStorage.setItem("listaJuegos", JSON.stringify(juegos));
    cargarLS();
}

function cargarLS(){
const listaJuegos = localStorage.getItem("listaJuegos");
    if (listaJuegos) {
    juegos = JSON.parse(listaJuegos);  
    } else{
      juegos = [];
    }

    const tabla = document.getElementById("tablaJuegos");
        tabla.innerHTML =""
        juegos.forEach((element, index) => {
        tabla.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element.codigoUnico}</td>
            <td>${element.nombre}</td>
            <td>${element.categoria}</td>
            <td>${element.estado}</td>
            <td>${element.descripcion}</td>
            <td>${element.favorito}</td>
            <td><button type="button" class="btn" onclick="deleteJuego(${index})">Eliminar</button></td>
        </tr>
        `
    });


} 
    cargarLS()
    console.warn("Funcionando");

