var boton = document.getElementById("btnToggle");

boton.addEventListener('click', function(){
    var documento = document.getElementById("SobreMi");

    if (documento.style.display === 'none'){

        documento.style.display = 'block'

    }
    else {
        documento.style.display = 'none'
    }
});
