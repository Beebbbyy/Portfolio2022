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

    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const body = document.body;

    // Function to set the theme and update the icon
    function setTheme(theme) {
        if (theme === 'dark-mode') {
            body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.removeItem('theme');
        }
    }

    // Check for saved theme preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // If no preference saved, check system preference
        setTheme('dark-mode');
    } else {
        setTheme('light-mode'); // Default to light mode if no preference
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            setTheme('light-mode');
        } else {
            setTheme('dark-mode');
        }
    });
});
