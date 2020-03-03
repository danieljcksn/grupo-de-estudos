//Sidenav
const slide_menu = document.querySelectorAll(".sidenav");
M.Sidenav.init(slide_menu, {});


//Animação do Conteúdo
ScrollReveal().reveal('#apresentacao', { duration: 2000 });
//Apresentação
ScrollReveal().reveal('.fig-participar', { delay: 500 });
ScrollReveal().reveal('.fig-participar', { duration: 2000 });
//Objetivo
ScrollReveal().reveal('#participar-text', { delay: 700 });
ScrollReveal().reveal('#participar-text', { duration: 2000 });

ScrollReveal().reveal('#content-objetivo-m', { delay: 1000 });
ScrollReveal().reveal('#content-objetivo-m', { duration: 2000 });


//Footer
ScrollReveal().reveal('#footer-info', { delay: 100 });
ScrollReveal().reveal('#footer-info', { duration: 2000 });

//Inicialização Scrollspy
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});