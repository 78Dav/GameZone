

let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

const mostrarLogin = ()  =>{
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

const mostrarRegister = () => {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}


let users = []

const addUser = (user) => {
    users.push(user);
}

function formControl (event) {
    event.preventDefault();
    const account = document.getElementById("InputAccount");
    const email = document.getElementById("InputEmail");
    const password = document.getElementById("InputPassword");
    addUser({
        account: account.value,
        email: email.value,
        password: password.value,
    });
    localStorage.setItem("listUsers", JSON.stringify(users));
    saveLS();
    account.value = "";
    email.value = "";
    password.value = "";
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

    const table = document.getElementById("tableUsers");
        table.innerHTML =""
        users.forEach((element, index) => {
        table.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element.account}</td>
            <td>${element.email}</td>
            <td>${element.password}</td>
            <td><button type="button" class="btn" onclick="deleteUser(${index})">Eliminar</button></td>
        </tr>
        `
    }); 

} 
    saveLS()
