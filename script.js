$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoImagem = $('#url-imagem').val();
        const novaImagem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImagem}">`).appendTo(novaImagem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoImagem}" target="_blank" title="ver imagem em tamanho real">
                Ver imagem em tamanho real
                </a>
        </div>`
        ).appendTo(novaImagem);
        $(novaImagem).appendTo('ul');
        $(novaImagem).fadeIn(1000);
        $('#url-imagem').val('');
    });

    $('form').on('reset', function(){
        $('form').slideUp();
    })
});
