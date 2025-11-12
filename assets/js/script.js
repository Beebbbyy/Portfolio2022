jQuery(document).ready(function($){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass('sticky');
        }else {
            $('.navbar').removeClass('sticky');
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    /* slide script */
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});

    });
    /* typing */
    var typed = new Typed(".typing",{
        strings: ["ETL Developer",  "Data Engineer"],
        typeSpeed:100,
        backSpeed: 60,
        loop:true
    });

    // var typed = new Typed(".typing-2",{
    //     strings: ["ETL Developer.",  "Data Engineer",],
    //     typeSpeed:100,
    //     backSpeed: 60,
    //     loop:true
    // });
    /* menu animation */
    const menu = document.querySelector('.navbar')
    const navlink = document.querySelector('.menu');
    const links = document.querySelectorAll('.menu li');

    menu.addEventListener('click', () => {
        navlink.classList.toggle("open");

    });

    /* toggle menu/nav bar script */
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    /* owl carousel script */
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav: false
            }
        }
    });
});