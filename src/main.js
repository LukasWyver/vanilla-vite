document.getElementById("nav-icon").addEventListener('click',
      () => document.getElementById("nav-menu").classList.toggle("hidden")
);

// Jquery
$(document).ready(function () {
      // -- slide start --
      // aqui chamamos o primeiro elemento <img> dentro do elemento pai com a id #slide e acrescentamos a classe .ativo e mostramos em tela com a função show();
      $("#slide img:eq(0)").addClass("ativo").show();
      // aqui chamamos a função setInterval(); que recebe dois parametros
      setInterval(slide, 7000);
      // passa para a proxima imagem
      $('#previus').click(() => slide())
      // aqui criamos a função slide(); que foi chamada como parametro da função setInterval + o segundo parametro de "3 segs'
      function slide() {
            // se houver uma proxima tag <img> após a atual que possui a classe .ativo, irá fazer algo
            if ($(".ativo").next().size()) {
                  // a tag atual desaparece, perde a classe .ativo, a proxima aparece e recebe a clase .ativo
                  $(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
            } else {
                  // se não, a classe atual desaparece, perde a classe .ativo
                  $(".ativo").fadeOut().removeClass("ativo");
                  // e a primeira tag <img> volta a aparecer e rebecer a classe .ativo.
                  $("#slide img:eq(0)").fadeIn().addClass("ativo");
                  // e assim o ciclo nunca acaba e o slide é infinito!
            }
      }
      // -- slide end --

      // -- slide utilizando Slick js
      $('.carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,

            autoplay: true,
            autoplaySpeed: 4000, // 4 segs

            arrows: false,
      });
})