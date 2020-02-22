//Função para ocultar divs quando o botão do checkbox for pressionado.
function hideScroll(){
    var overflowState = 'auto'
    var checkBox = document.getElementById('myCheck');
    if(checkBox.checked == true){
        overflowState = 'hidden';
        $('.overlay').show();
        //$('div.apresentacao').hide(); // Hides all matches
    }else{
        overflowState = 'auto';
        $('.overlay').hide(); 
        //$('div.apresentacao').show(); // Shows all matches
    }
    $('html, body').css('overflow', overflowState);
}