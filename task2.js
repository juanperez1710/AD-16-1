/**2. Write a JavaScript function to get the values of First and Last name from the form.
By clicking on the button, the names should be printed to the console. */
function getFormvalue() {
    event.preventDefault;
    const formulario = document.getElementById("form1");
    const nombre = formulario.elements['fname'].value;
    const apellido = formulario.elements['lname'].value;
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    return false;
}
