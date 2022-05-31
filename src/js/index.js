import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation,Pagination]);

const swiper = new Swiper('.testimonials', {
    direction: 'horizontal',
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    simulateTouch: true,

    grabCursor: true,

    effect: 'flip',

    flipEffect: {
        slideShadows: true,
        limitRotation: true
    }

    /* fadeEffect: {
        crossFade: true
    } */

    /* autoplay: {
        delay: 1000,
        disableOnInteraction: false
    } */

    /* slidesPerView: 2, */

    /* mousewheel: {

        sensitivity: 1,
        eventsTarget: ""

    } */

    /* keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    } */

    /* slideToClickedSlide: true, */

    /* hashNavigation: {
        watchState: true,
    } */
});


