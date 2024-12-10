$(document).ready(function() {
    $(".navbar-brand").click(function (e) { 
        e.preventDefault();
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").hide();
        $(".home").show();
        $('html, body').animate({
            scrollTop: $("#div-presentation").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".nav-link[href='#div-contacto']").click(function (e) {
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").show();
        $(".home").hide();
        $('html, body').animate({
            scrollTop: $("#div-contacto").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".button-contactar").click(function (e) {
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").show();
        $(".home").hide();
        $('html, body').animate({
            scrollTop: $("#div-contacto").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".dropdown-item[href='#div-History']").click(function (e) {
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").hide();
        $(".home").show();
        $('html, body').animate({
            scrollTop: $("#div-History").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".dropdown-item[href='#div-Planes']").click(function (e) {
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").hide();
        $(".home").show();
        $('html, body').animate({
            scrollTop: $("#div-Planes").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".dropdown-item[href='#div-organigrama']").click(function (e) {
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").hide();
        $(".home").show();
        $('html, body').animate({
            scrollTop: $("#div-organigrama").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".btn-comprar").click(function (e) { 
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").show();
        $(".home").hide();
        e.preventDefault();
    });

    $(".footer-contacto").click(function (e) { 
        e.preventDefault();
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").show();
        $(".home").hide();
        $('html, body').animate({
            scrollTop: $("#div-contacto").offset().top 
        }, 100);
    });

    $(".footer-planes").click(function (e) { 
        e.preventDefault();
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").show();
        $(".home").hide();
        $('html, body').animate({
            scrollTop: $("#div-Planes").offset().top 
        }, 100);
    });

    // mostrar a detalle los integrantes
    $("#toggle-integrantes").click(function () {
        const fichas = $("#fichas-integrantes");
        fichas.toggleClass("d-none");

        if (fichas.hasClass("d-none")) {
            $(this).text("Mostrar Integrantes");
        } else {
            $(this).text("Ocultar Integrantes");
        }
    });

    $(".dropdown-item[href='#div-Estructura-Financiera']").click(function (e) {
        $("#div-Estructura-Financiera").show();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").hide();
        $(".home").hide();
        $('html, body').animate({
            scrollTop: $("#div-Estructura-Financiera").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".dropdown-item[href='#div-Estudio-Economico']").click(function (e) {
        $("#div-Estudio-Economico").show();
        $("#div-Estructura-Financiera").hide();
        $(".home").hide();
        $('html, body').animate({
            scrollTop: $("#div-Estudio-Economico").offset().top 
        }, 100);
        e.preventDefault();
    });

});