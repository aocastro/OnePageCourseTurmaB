$(document).ready(function(){
    $('#btn-menu').click(function(e){
        e.preventDefault()
        $('#menu').toggle('slow')
    })

    // Criar uma função para monitorar os cliques nos links
    $('a').click(function(e){
        e.preventDefault()
        // Capturar qual é a página que desejo abrir
        let url = $(this).attr('href')
        $('#'+url).show()
    })
})