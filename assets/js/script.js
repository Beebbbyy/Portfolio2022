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

    // Observe stats boxes
    document.querySelectorAll('.stats-container .stat-box').forEach(statBox => {
        observer.observe(statBox);
    });

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

    // Observe project cards
    document.querySelectorAll('.projects-grid .project-card').forEach(card => {
        observer.observe(card);
    });

    // Observe blog filters
    const blogFilters = document.querySelector('.blog .blog-filters');
    if (blogFilters) observer.observe(blogFilters);

    // Observe blog cards
    document.querySelectorAll('.blog-grid .blog-card').forEach(card => {
        observer.observe(card);
    });

    // ============================================
    // PROJECT FILTERING
    // ============================================

    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');

                if (filterValue === 'all') {
                    card.classList.remove('hide');
                    // Re-trigger animation
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = '';
                        card.classList.add('animated');
                    }, 10);
                } else {
                    if (categories.includes(filterValue)) {
                        card.classList.remove('hide');
                        // Re-trigger animation
                        card.style.animation = 'none';
                        setTimeout(() => {
                            card.style.animation = '';
                            card.classList.add('animated');
                        }, 10);
                    } else {
                        card.classList.add('hide');
                    }
                }
            });
        });
    });

    // ============================================
    // BLOG FILTERING
    // ============================================

    const blogFilterBtns = document.querySelectorAll('.blog-filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    blogFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            blogFilterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            blogCards.forEach(card => {
                const categories = card.getAttribute('data-category');

                if (filterValue === 'all') {
                    card.classList.remove('hide');
                    // Re-trigger animation
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = '';
                        card.classList.add('animated');
                    }, 10);
                } else {
                    if (categories.includes(filterValue)) {
                        card.classList.remove('hide');
                        // Re-trigger animation
                        card.style.animation = 'none';
                        setTimeout(() => {
                            card.style.animation = '';
                            card.classList.add('animated');
                        }, 10);
                    } else {
                        card.classList.add('hide');
                    }
                }
            });
        });
    });

    // ============================================
    // CONTACT FORM WITH EMAILJS
    // ============================================

    // Initialize EmailJS
    // NOTE: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    // Get your key from: https://dashboard.emailjs.com/admin/account
    (function() {
        emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
    })();

    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const notification = document.getElementById('form-notification');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Disable submit button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Get form values
            const formData = {
                from_name: document.getElementById('from_name').value,
                reply_to: document.getElementById('reply_to').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Send email using EmailJS
            // NOTE: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
            // Get these from: https://dashboard.emailjs.com/admin
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
                .then(function(response) {
                    // Show success notification
                    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');

                    // Reset form
                    contactForm.reset();

                    // Re-enable submit button
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                }, function(error) {
                    // Show error notification
                    showNotification('Failed to send message. Please try again or email me directly.', 'error');

                    // Re-enable submit button
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                });
        });
    }

    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = `form-notification ${type} show`;

        // Hide notification after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }
});
