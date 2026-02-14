// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navCtas = document.querySelector('.nav-ctas');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navCtas) navCtas.classList.toggle('active');
    });
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Section scroll reveal
const revealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, revealOptions);

document.querySelectorAll('.section-reveal').forEach(section => {
    revealObserver.observe(section);
});

// Animate stats on scroll
const statObserverOptions = { threshold: 0.5, rootMargin: '0px' };
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, statObserverOptions);

document.querySelectorAll('.stat-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    statObserver.observe(item);
});

// Quote carousel – auto-rotates; background syncs with each quote for energy
// Update hidden slide only after crossfade finishes so the change isn’t visible
(function () {
    const slides = document.querySelectorAll('.quote-slide');
    const total = slides.length;
    if (!total) return;

    var quoteBgImages = [
        'Photos/Famous faces/Podcast_Show_2024_-_RB_-209429_1920x1280.jpg',
        'Photos/Famous faces/The_Podcast_Show_-_23rd_May_2024_by_Luke_Dyson_-_LD3_0731_1920x1280.jpg',
        'Photos/Famous faces/The_Podcast_Show_-_22nd_May_2024_by_Luke_Dyson_-_LD3_0387-Enhanced-NR_1920x1280.jpg',
        'Photos/Audience/Podcast Show 2025 -Day 1-200796-2.jpg',
        'Photos/Exhibitors/Podcast_Show_2024_-_RB_-209395_1920x1280.jpg'
    ];
    var bgSlides = document.querySelectorAll('.quote-section-bg-slide');
    var bgActive = 0;
    var quoteBgTransitionMs = 1000;

    function setQuoteBg(slideEl, index) {
        var path = quoteBgImages[index % quoteBgImages.length].replace(/\\/g, '/');
        slideEl.style.backgroundImage = 'url("' + encodeURI(path) + '")';
    }

    if (bgSlides.length >= 2) {
        setQuoteBg(bgSlides[0], 0);
        bgSlides[0].classList.add('active');
        bgSlides[1].classList.remove('active');
    }

    let currentIndex = 0;
    const ROTATE_MS = 6000;

    function goTo(index) {
        currentIndex = (index + total) % total;
        slides.forEach(function (s, i) { s.classList.toggle('active', i === currentIndex); });

        if (bgSlides.length >= 2) {
            bgActive = 1 - bgActive;
            setQuoteBg(bgSlides[bgActive], currentIndex);
            bgSlides[bgActive].classList.add('active');
            bgSlides[1 - bgActive].classList.remove('active');
            window.setTimeout(function () {
                setQuoteBg(bgSlides[1 - bgActive], (currentIndex + 1) % total);
            }, quoteBgTransitionMs);
        }
    }

    setInterval(function () { goTo(currentIndex + 1); }, ROTATE_MS);
})();

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isOpen = item.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        
        if (!isOpen) {
            item.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
        } else {
            button.setAttribute('aria-expanded', 'false');
        }
    });
});

// Newsletter form (prevent default for demo)
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    if (email) alert('Thanks for subscribing! We\'ll be in touch.');
});
