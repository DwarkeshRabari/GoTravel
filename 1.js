


        var swiper = new Swiper(".card_slider", {
            spaceBetween: 30,
            loop: true,

            navigation: {
                nextEl: "#abtn2",
                prevEl: "#abtn",
            },
            breakpoints:{
                320:{
                    slidesPerView: 1,
                },
                500:{
                    slidesPerView: 2,
                },
                750:{
                    slidesPerView: 3,
                },
                1000:{
                    slidesPerView: 4,
                }
            }
        });