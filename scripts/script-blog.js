//Sidenav
const slide_menu = document.querySelectorAll(".sidenav");
M.Sidenav.init(slide_menu, {});



//Animação do Conteúdo
ScrollReveal().reveal('#apresentacao', { duration: 2000 });

ScrollReveal().reveal('.corpo-blog', { delay: 400 });
ScrollReveal().reveal('.corpo-blog', { duration: 2000 });
//Footer
ScrollReveal().reveal('#footer-info', { delay: 100 });
ScrollReveal().reveal('#footer-info', { duration: 2000 });