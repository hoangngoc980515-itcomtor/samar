// LOADER
window.addEventListener("load", function () {
    document.getElementById("loader").classList.add("hide");
});

// COUNTER
$(".counter").counterUp({
    delay: 10,
    time: 3000
});

// TESTIMONIAL
var testimonialThumbs = new Swiper(".testimonial__thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    autoplay: true,
    loop: true,
    speed: 3000
});
var testimonialContent = new Swiper(".testimonial__comment", {
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    speed: 3000,
    thumbs: {
        swiper: testimonialThumbs
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

// BLOG
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

// WOW (animate.css v4 dùng class "animate__animated")
new WOW({
    animateClass: "animate__animated"
}).init();

// BACK TO TOP
var backToTop = document.querySelector(".js-cd-top");

window.addEventListener("scroll", function () {
    backToTop.classList.toggle("cd-top--is-visible", window.scrollY > 300);
});

backToTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});
