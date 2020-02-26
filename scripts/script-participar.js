//Função para ocultar divs quando o botão do checkbox for pressionado.
function hideScroll(){
    var overflowState = 'auto'
    var checkBox = document.getElementById('myCheck');
    if(checkBox.checked == true){
        overflowState = 'hidden';
        $('.overlay').show();
    }else{
        overflowState = 'auto';
        $('.overlay').hide(); 
    }
    $('html, body').css('overflow', overflowState);
}