//Sidenav
const slide_menu = document.querySelectorAll(".sidenav");
M.Sidenav.init(slide_menu, {});

//Animação do conteúdo
ScrollReveal().reveal('#apresentacao', { duration: 2000 });
//Apresentação
ScrollReveal().reveal('#img-apresentacao', { delay: 500 });
ScrollReveal().reveal('#img-apresentacao', { duration: 2000 });
//Sobre
ScrollReveal().reveal('#text-sobre', { delay: 100 });
ScrollReveal().reveal('#text-sobre', { duration: 2000 });
ScrollReveal().reveal('#content-sobre', { delay: 600 });
ScrollReveal().reveal('#content-sobre', { duration: 2000 });
ScrollReveal().reveal('#img-sobre', { delay: 1200 });
ScrollReveal().reveal('#img-sobre', { duration: 2000 });

ScrollReveal().reveal('#content-sobre-m', { delay: 1000 });
ScrollReveal().reveal('#content-sobre-m', { duration: 2000 });

//Blog
ScrollReveal().reveal('#text-blog', { delay: 100 });
ScrollReveal().reveal('#text-blog', { duration: 2000 });
ScrollReveal().reveal('#content-blog', { delay: 600 });
ScrollReveal().reveal('#content-blog', { duration: 2000 });
ScrollReveal().reveal('#img-blog', { delay: 100 });
ScrollReveal().reveal('#img-blog', { duration: 2000 });

ScrollReveal().reveal('#content-blog-m', { delay: 600 });
ScrollReveal().reveal('#content-blog-m', { duration: 2000 });

//Participe
ScrollReveal().reveal('#text-participe', { delay: 100 });
ScrollReveal().reveal('#text-participe', { duration: 2000 });
ScrollReveal().reveal('#content-participe', { delay: 600 });
ScrollReveal().reveal('#content-participe', { duration: 2000 });
ScrollReveal().reveal('#botao-participe', { delay: 1300 });
ScrollReveal().reveal('#botao-participe', { duration: 2000 });

//Footer
ScrollReveal().reveal('#footer-info', { delay: 100 });
ScrollReveal().reveal('#footer-info', { duration: 2000 });

//Inicialização Scrollspy
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});