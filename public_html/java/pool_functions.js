/* 
 * pool_functions.js
 * Uso de las funciones secundarias no dinamicas para la aplicacion
 * Created on : 10 jun. 2019, 12:59:10
 * Author     : Luis Miguel Rubio Toledo
*/

function mostrar_ocultar(idButton) { 
    var a = document.getElementById('piscinaautocover');
    var b = document.getElementById('piscinaclasica');
    var c = document.getElementById('piscinacurva');
    var d = document.getElementById('piscinarecta');
    document.getElementById('transformarimagen').style.display = 'block';

    switch(idButton) {
        case 1:
            a.style.display = 'block';
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            break;
        case 2:
            a.style.display = 'none';
            b.style.display = 'block';
            c.style.display = 'none';
            d.style.display = 'none';
            break;
        case 3:
            a.style.display = 'none';
            b.style.display = 'none';
            c.style.display = 'block';
            d.style.display = 'none';
            break;
        case 4:
            a.style.display = 'none';
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'block';
            break;
        default:
            alert("hay un problema: No existe.");
    }
}
function imgshow(element){
    var imagen = document.querySelector('#imgTransform');
    var path= "image/piscinas/piscina"+element+".png";
    if(imagen.childElementCount < 1){
        createImg("imgTransform",path);
    }
    else {
        while (imagen.firstChild) {
            imagen.removeChild(imagen.firstChild);
        }
        createImg("imgTransform",path);
    }
}

