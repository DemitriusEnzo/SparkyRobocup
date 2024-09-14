const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3, // Padrão para telas grandes
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3, // Exibe 3 imagens para telas grandes (>= 1200px)
        },
        992: {
            slidesPerView: 2, // Exibe 2 imagens em telas médias (>= 992px e < 1200px)
        },
        768: {
            slidesPerView: 1, // Exibe 1 imagem para telas menores (>= 768px e < 992px)
        },
        0: {
            slidesPerView: 1, // Exibe 1 imagem para telas muito pequenas (< 768px)
        }
    }
});
