const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () =>{
        burger.classList.toggle('toggle');
    });
}


/*Função para ocultar divs quando o botão do checkbox for pressionado.
function ocultarDiv(){
    var checkBox = document.getElementById('myCheck');
    var apresentacao = document.getElementsByClassName("apresentacao");
    if(checkBox.checked == true){
        $('div.apresentacao').hide(); // Hides all matches
    }else{
        $('div.apresentacao').show(); // Shows all matches
    }
}
*/