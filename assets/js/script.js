// MAIN APP
function scrollFooter() {
    const footer = document.querySelector('.footer'),
        bodyContainer = document.querySelector('.body__container');
    // this.scrollY is a value of how much we have scrolled our top point of the website
    //  from the beggining of our document. We need to subtract the whole window height from the height 
    // of the whole document, so that the values can match (even then it is not the same, so we need to add 1 value to it)
    (document.body.scrollHeight - window.innerHeight > this.scrollY + 1) ? footer.classList.add('scrolled') : footer.classList.remove('scrolled')
}

window.addEventListener('scroll', scrollFooter)

// VENO LOGHTBOX 
new VenoBox({
    selector: ".photo-gallery",
    spinner: "flow"
});

// SWIPER

let swiperreference = new Swiper(".reference__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    // autoplay: {
    //     disableOnInteraction: false,
    // },
    speed: 2000,


    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 52,
        },
    }
});