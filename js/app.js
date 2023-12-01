console.log("funcionando");

let juegos = []

const addJuego = (juego) => {
    juegos.push(juego);
}
function modal (event) {
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
            <td><button type="button" class="btn" onclick="deleteJuego(${index})">Eliminar</button></td>
        </tr>
        `
    });
} 
    cargarLS()
    console.warn("Funcionando bien hasta aca papilo");




console.log("funcionando");

let users = []

const addUser = (user) => {
    users.push(user);
}
function form (event) {
    event.preventDefault();
    const lastName = document.getElementById("InputLastName");
    const completeName = document.getElementById("InputCompleteName");
    const estate = document.getElementById("InputEstate");
    const city = document.getElementById("InputCity");
    const email = document.getElementById("InputEmail");
    const rEmail = document.getElementById("InputREmail");
    const nameAccount = document.getElementById("InputNameAccount");
    const password = document.getElementById("InputPassword");
    const rPassword = document.getElementById("InputRPassword");
    const legalAge = document.getElementById("checkLegalAge");
    addUser({
        lastName: lastName.value,
        completeName: completeName.value,
        estate: estate.value,
        city: city.value,
        email: email.value,
        rEmail: rEmail.value,
        nameAccount: nameAccount.value,
        password: password.value,
        rPassword: rPassword.value,
        legalAge: legalAge.value,
    });
    localStorage.setItem("listUsers", JSON.stringify(users));
    saveLS();
    lastName.value = "";
    completeName.value = "";
    estate.value = "";
    city.value = "";
    email.value = "";
    rEmail.value = "";
    nameAccount.value = "";
    password.value = "";
    rPassword.value = "";
    legalAge.value = "";
}

function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem("listUsers", JSON.stringify(users));
    saveLS();
}

function saveLS(){
const listUsers = localStorage.getItem("listUsers");
    if (listUsers) {
    users = JSON.parse(listUsers);  
    } else{
      users = [];
    }

    const tabla = document.getElementById("tablaUsers");
        tabla.innerHTML =""
        users.forEach((element, index) => {
        tabla.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element.lastName}</td>
            <td>${element.completeName}</td>
            <td>${element.estate}</td>
            <td>${element.city}</td>
            <td>${element.email}</td>
            <td>${element.rEmail}</td>
            <td>${element.nameAccount}</td>
            <td>${element.password}</td>
            <td>${element.rPassword}</td>
            <td>${element.legalAge}</td>
            <td><button type="button" class="btn" onclick="deleteUser(${index})">Eliminar</button></td>
        </tr>
        `
    });
} 
    saveLS()
 console.log("funcando");