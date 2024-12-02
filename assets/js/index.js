$(document).ready(function () {
    // Funcion para cambiar entre modo oscuro y claro
    $(".btn-tema").click(function () {
        var temaActual = $("body").attr("data-bs-theme");
        if (temaActual === "dark") {
            $("body").attr("data-bs-theme", "light");
            $(".navbar").addClass("bg-light").removeClass("bg-dark");
            $("#btn-cambiar-tema").addClass("btn-dark").removeClass("btn-light");
            $("#icono-tema").attr("src","assets/img/icono-tema-oscuro.svg");
            $(".contenedor-dark").addClass("contenedor-light").removeClass("contenedor-dark");
            $(".contenedor-bg-dark").addClass("contenedor-bg-light").removeClass("contenedor-bg-dark");
            $(".habilidad-elemento-dark").addClass("habilidad-elemento-light").removeClass("habilidad-elemento-dark");
        } else {
            $("body").attr("data-bs-theme", "dark");
            $(".navbar").addClass("bg-dark").removeClass("bg-light");
            $("#btn-cambiar-tema").addClass("btn-light").removeClass("btn-dark");
            $("#icono-tema").attr("src","assets/img/icono-tema-claro.svg");
            $(".contenedor-light").addClass("contenedor-dark").removeClass("contenedor-light");
            $(".contenedor-bg-light").addClass("contenedor-bg-dark").removeClass("contenedor-bg-light");
            $(".habilidad-elemento-light").addClass("habilidad-elemento-dark").removeClass("habilidad-elemento-light");
        }
    });
    // Validacion con jquery por si remueven los required del html
    $("#formulario").on("submit", function(e) {
        var nombreContacto = $("#nombreContactoInput").val();
        var email = $("#emailInput").val();
        var mensaje = $("#mensajeContactoInput").val();
        if(!nombreContacto){
            alert("Debes ingresar un nombre");
            return false;
        }
        if(!email){
            alert("Debes ingresar un correo electrónico");
            return false;
        }
        if(!mensaje){
            alert("Debes ingresar un mensaje");
            return false;
        }
        //limpia el formulario
        this.reset();
        return true;
    });
});