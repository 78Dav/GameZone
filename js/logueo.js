function loguear ()
{
    let email = document.getElementById("InputEmail").value;
    let pass = document.getElementById("InputPassword").value;


if(email == "estebdav_78@gmail.com" && pass == "26446234")
{
   
   
    window.location = "home.html";

    alert("Bienvenido a GameZone");


}

else

{

    alert("Los datos ingresados son incorrectos, por favor vuelve a intentar.");

}

}