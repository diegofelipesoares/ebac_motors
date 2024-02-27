//função do carrossel
$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay: true,
    });
    // função do icone hamburguer para descer menu
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    /*slideToggle usa o mesmo click para down e up o slide.*/
    })

    // Aplicando máscara de telefone
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: "(XX) 99999-9999"
    })

    //Criando validação dos campos do jQuery Validate
    //esse validado não usa do id do campo, mas sim o nome.
    //será necessário preencher os names nos inputs
    // os rules (name inputs) não podem conter hifen
    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculo: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        //mensagem personalizada de validação
        messages:{
            nome: "Por favor, bota seu nome"
        },
        //função de recuperar inofrmação no evento submit
        submitHandler: function(form){
            console.log(form)
        },
        //função que conta os campos inválidos quando submetidos
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    })
})

//Efeito de rolagem da tela automatico ao apertar o botão.
//Efeito recuperando informação do HTML e colocando no Form
$(document).ready(function(){    
    //selecionando todos os botões da classe lista-veiculos
    $('.lista-veiculos button').click(function(){
        //variável para guardar o id do local do efeito
        const destino = $('#contato');
        
        //recuperando informação do h3 do botão apertado
        //deste botão, encontre o parente h3 e traga seu texto
        const nomeVeiculo = $(this).parent().find('h3').text()
        //constante acima recebe o valor de h3

        //Setando o valor de nomeVeiculo no form
        $("#veiculo-interesse").val(nomeVeiculo);

        //criando a animação no html
        $('html').animate({
            //scrollTop é o efeito
            //destino contém o id do local
            //offset().top diz a distancia do top para destino.
            scrollTop: destino.offset().top
        },
        1000 //duração em milessegundos
        )
    })
})