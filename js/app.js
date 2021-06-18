$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots',
        autoplay:true,
        slidesToShow: 1
    });

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times-btn')
    let mobile = document.querySelector('.mobile-wrap')

    hamberger.addEventListener('click',function(){
        mobile.classList.add('open')
    })

    times.addEventListener('click',function(){
        mobile.classList.remove('open')
    })
})