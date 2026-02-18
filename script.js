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

// Stat counter animation
function animateCounter(el) {
    const text = el.textContent.trim();
    const suffix = text.replace(/[\d,]/g, '');
    const target = parseInt(text.replace(/[^0-9]/g, ''), 10);
    if (!target) return;
    const duration = 1500;
    const start = performance.now();
    function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

// Section scroll reveal + stat counters
const revealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
            entry.target.classList.add('revealed');
        }
    });
}, revealOptions);

// Separate observer for counters — only fires when stats section is well into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-number').forEach((el, i) => {
                setTimeout(() => animateCounter(el), i * 150);
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) counterObserver.observe(statsSection);

document.querySelectorAll('.section-reveal').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Already in viewport on load — reveal instantly, no animation
        section.style.transition = 'none';
        section.classList.add('revealed');
        requestAnimationFrame(() => section.style.transition = '');
    }
    revealObserver.observe(section);
});

// Quote carousel – simple text rotation, no background images
(function () {
    const slides = document.querySelectorAll('.quote-slide');
    const total = slides.length;
    if (!total) return;

    let currentIndex = 0;
    const ROTATE_MS = 6000;

    function goTo(index) {
        currentIndex = (index + total) % total;
        slides.forEach(function (s, i) { s.classList.toggle('active', i === currentIndex); });
    }

    setInterval(function () { goTo(currentIndex + 1); }, ROTATE_MS);
})();

// Announcement ticker — duplicate items for seamless loop
const tickerTrack = document.querySelector('.announcement-themes-track');
if (tickerTrack) {
    tickerTrack.innerHTML += tickerTrack.innerHTML;
}

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
