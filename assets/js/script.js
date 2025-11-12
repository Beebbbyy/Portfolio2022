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

    // ============================================
    // SCROLL-TRIGGERED ANIMATIONS
    // ============================================

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // For skill bars, also trigger their animation
                if (entry.target.classList.contains('bars')) {
                    entry.target.classList.add('animated');
                }
            }
        });
    }, observerOptions);

    // Observe section titles
    document.querySelectorAll('section .title').forEach(title => {
        observer.observe(title);
    });

    // Observe about section columns
    const aboutLeft = document.querySelector('.about .about-content .left');
    const aboutRight = document.querySelector('.about .about-content .right');
    if (aboutLeft) observer.observe(aboutLeft);
    if (aboutRight) observer.observe(aboutRight);

    // Observe service cards
    document.querySelectorAll('.services .serv-content .card').forEach(card => {
        observer.observe(card);
    });

    // Observe skills section columns
    const skillsLeft = document.querySelector('.skills .skills-content .left');
    const skillsRight = document.querySelector('.skills .skills-content .right');
    if (skillsLeft) observer.observe(skillsLeft);
    if (skillsRight) observer.observe(skillsRight);

    // Observe skill bars specifically
    document.querySelectorAll('.skills .skills-content .right .bars').forEach(bars => {
        observer.observe(bars);
    });

    // Observe contact section columns
    const contactLeft = document.querySelector('.contact .contact-content .left');
    const contactRight = document.querySelector('.contact .contact-content .right');
    if (contactLeft) observer.observe(contactLeft);
    if (contactRight) observer.observe(contactRight);
});
