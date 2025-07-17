// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');
    
    if (visibility === "false") {
        nav.setAttribute('data-visible', "true");
        navToggle.setAttribute('aria-expanded', "true");
    } else {
        nav.setAttribute('data-visible', "false");
        navToggle.setAttribute('aria-expanded', "false");
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.setAttribute('data-visible', "false");
        navToggle.setAttribute('aria-expanded', "false");
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For this example, we'll just log it and show an alert
        console.log({ name, email, message });
        
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to current page link
const currentPage = location.pathname.split('/').pop() || 'index.html';
const navItems = document.querySelectorAll('.nav__link');

navItems.forEach(item => {
    const itemHref = item.getAttribute('href');
    if (currentPage === itemHref) {
        item.classList.add('active');
    }
});