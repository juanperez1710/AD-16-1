/**3. Write a function to show an alert with information about links.
Clicking on the button should display the number of links on the page, the first link in the page, and the last link in the page. */
function mostrarInfoEnlaces() {
            // 1. Obtiene todos los elementos de ancla (<a>) de la página.
            const enlaces = document.querySelectorAll('a');
            const infoAlert = document.getElementById('infoAlert');
            const alertContent = document.getElementById('alertContent');
        
                const numeroDeEnlaces = enlaces.length;
                const hrefPrimerEnlace = enlaces[0].href;
                const hrefUltimoEnlace = enlaces[enlaces.length - 1].href;
                alertContent.innerHTML = `
                    <strong>Número total de enlaces:</strong> ${numeroDeEnlaces} <br>
                    <strong>Primer enlace:</strong> ${hrefPrimerEnlace} <br>
                    <strong>Último enlace:</strong> ${hrefUltimoEnlace}
                `;
            infoAlert.style.display = 'block';
}


        document.addEventListener('DOMContentLoaded', () => {
            const boton = document.getElementById('btn');
            if (boton) {
                boton.addEventListener('click', mostrarInfoEnlaces);
            }
        });
