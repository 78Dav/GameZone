window.addEventListener("load", () => {
    document.querySelector(".menuBtn").addEventListener("click", () => {
        document.querySelector(".navMenu").classList.toggle("show");
    });

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

    /*Agregar una estrella de favorito*/
    const favoritoIcon = favorito.value.toLowerCase() === 'si' ? '<i class="fas fa-star"></i>' : '';

    addJuego({
        codigoUnico: codigoUnico.value,
        nombre: nombre.value,
        categoria: categoria.value,
        estado: estado.value,
        descripcion: descripcion.value,
        favorito: `${favorito.value} ${favoritoIcon}`, /*estrella se incluye*/
    });

    localStorage.setItem("listaJuegos", JSON.stringify(juegos));
    cargarLS();

    
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
            <td>${element.estado}<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>
            <td>${element.descripcion}</td>
            <td>${element.favorito}</td>
            <td><button type="button" class="btn btn-editar" onclick="editarJuego(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
            <td><button type="button" class="btn" onclick="deleteJuego(${index})">Eliminar</button></td>
            
        </tr>
        `
    });


} 
    cargarLS()
    console.warn("Funcionando");

/* Editar juego, primera parte abre modal, segunda modifica y cierra*/

    function editarJuego(index) {
        
        const juego = juegos[index];
    
    
        document.getElementById("inputCodigoUnico").value = juego.codigoUnico;
        document.getElementById("inputNombre").value = juego.nombre;
        document.getElementById("inputCategoria").value = juego.categoria;
        document.getElementById("inputEstado").value = juego.estado;
        document.getElementById("inputDescripcion").value = juego.descripcion;
        document.getElementById("inputFavorito").value = juego.favorito;
    
        
        document.getElementById("editIndex").value = index;
    
        
        const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show();
    }
    
    function modal(event) {
        event.preventDefault();
        const codigoUnico = document.getElementById("inputCodigoUnico");
        const nombre = document.getElementById("inputNombre");
        const categoria = document.getElementById("inputCategoria");
        const estado = document.getElementById("inputEstado");
        const descripcion = document.getElementById("inputDescripcion");
        const favorito = document.getElementById("inputFavorito");
        const editIndex = document.getElementById("editIndex").value;
    
        /*Agregar una estrella si el juego es favorito*/
        const favoritoIcon = favorito.value.toLowerCase() === 'si' ? '<i class="fas fa-star"></i>' : '';
    
        if (editIndex !== "") {
            
            juegos[editIndex] = {
                codigoUnico: codigoUnico.value,
                nombre: nombre.value,
                categoria: categoria.value,
                estado: estado.value,
                descripcion: descripcion.value,
                favorito: `${favorito.value} ${favoritoIcon}`,
            };
        } else {
            addJuego({
                codigoUnico: codigoUnico.value,
                nombre: nombre.value,
                categoria: categoria.value,
                estado: estado.value,
                descripcion: descripcion.value,
                favorito: `${favorito.value} ${favoritoIcon}`,
            });
        }
    
        localStorage.setItem("listaJuegos", JSON.stringify(juegos));
        cargarLS();
    
        codigoUnico.value = "";
        nombre.value = "";
        estado.value = "";
        categoria.value = "";
        descripcion.value = "";
        favorito.value = "";
        document.getElementById("editIndex").value = "";
    
        const modalElement = document.getElementById("exampleModal");
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
    }