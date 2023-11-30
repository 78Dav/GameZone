console.log("funcionando");

let juegos = []

const addJuego = (juego) => {
    juegos.push(juego);
}
function form (event) {
    event.preventDefault();
    const codigoUnico = document.getElementById("inputCodigoUnico");
    const nombre = document.getElementById("inputNombre");
    const categoria = document.getElementById("inputCategoria");
    const estado = document.getElementById("inputEstado");
    const descripcion = document.getElementById("inputDescripcion");
    addJuego({
        codigoUnico: codigoUnico.value,
        nombre: nombre.value,
        categoria: categoria.value,
        estado: estado.value,
        descripcion: descripcion.value,
    });
    localStorage.setItem("listaJuegos", JSON.stringify(juegos));
    cargarLS();
    codigoUnico.value = "";
    nombre.value = "";
    estado.value = "";
    categoria.value = "";
    descripcion.value = "";
}
//--------------------------------------------------------------------------------------//
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
            <td>${element.estado}<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
            <td>${element.descripcion}</td>
            <td><button type="button" class="btn btn-success" onclick="deleteJuego(${index})">Eliminar</button></td>
        </tr>
        `
    });
} 
    cargarLS()
