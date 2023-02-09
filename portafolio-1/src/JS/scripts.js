var telefono = window.matchMedia("(max-width:800px)");

let tiburon = function(){
    if (telefono.matches){
        console.log("Estamos en tamaño para teléfonos!");
        anime({
            targets: '.tiburon',
            translateX: 500, 
            easing: 'easeInOutSine', 
            duration: 1400
        });
    } else{
        console.log("Estamos en tamaño para monitores!");        
        anime({
            targets: '.tiburon',
            translateX: 500, 
            easing: 'easeInOutSine', 
            duration: 1400
        });
    }
}
let color = function() {
    $('div.contenido').css("color", "#FFFFFF");
}
let barra_animacion = function(){
    if (telefono.matches) {
        console.log("Estamos en tamaño para teléfonos!");
        anime({
            targets: '.barra', 
            width: ['0px', '100%'],
            backgroundColor: '#020D13',
            easing: 'easeInOutQuad', 
            duration: 1500
        });
    } else {
        console.log("Estamos en tamaño para monitores!");
        anime({
            targets: '.barra', 
            width: ['0px', '70%'],
            backgroundColor: '#020D13',
            easing: 'easeInOutQuad', 
            duration: 1500
        });
    }
};

AOS.init();
barra_animacion();
color();
tiburon();