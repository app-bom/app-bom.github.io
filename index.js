$(document).ready(function () {
    'use strict';

    const $buttonProjeto = $(".btn_projeto")
    const $buttonSolucao = $(".btn_solucao")
    const $buttonProblema = $(".btn_problema")
    const $buttonNoticias = $(".btn_noticias")
    const $buttonTime = $(".btn_time")
    const $buttonContato = $(".btn_contato")
    
    const $secaoProjeto = $("#about")
    const $secaoProblema = $("#projects")
    const $secaoSolucao = $("#services")
    const $secaoNoticias = $("#latest-news")
    const $secaoTime = $("#team")
    const $secaoContatos = $("#contact-us")
    const $secaoMenu = $(".top-header")
    const $btnSubir = $(".btn_fixed")
    const data = new Date()
    $('#copyright-year').html(data.getUTCFullYear())    


    $buttonProjeto.on('click', irPara.bind({}, $secaoProjeto))
    $buttonSolucao.on('click', irPara.bind({}, $secaoSolucao))
    $buttonProblema.on('click',irPara.bind({}, $secaoProblema))
    
    $buttonNoticias.on('click',irPara.bind({}, $secaoNoticias))
    $buttonTime.on('click',irPara.bind({}, $secaoTime))
    $buttonContato.on('click',irPara.bind({}, $secaoContatos))
    $btnSubir.on('click',irPara.bind({}, $secaoMenu))

    $(window).on('scroll', function () {
        if (window.scrollY == 0) {
            $btnSubir.removeClass("visible")
        } else {
            $btnSubir.addClass("visible")
        }
    })

    function irPara($secao) {
        $("html, body").animate({ scrollTop: $secao.offset().top}, 1000);
    }
    
});
