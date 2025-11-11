// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function highlightNavLink() {
    const scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos <= bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Add scroll animation on elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards, project cards, and other animated elements
document.querySelectorAll('.service-card, .project-card').forEach(el => {
    observer.observe(el);
});

// Navbar background on scroll
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Form validation for contact (if form is added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add loading state to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Only add loading state if it's not an anchor link
        if (!this.hasAttribute('href') || this.getAttribute('href').includes('#')) {
            return;
        }
        
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.disabled = true;
        
        // Reset after 2 seconds (adjust as needed)
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 2000);
    });
});

// Typing animation for hero text (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}


// Add smooth reveal animation to sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.15
});

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(section);
});

// Initialize - show first section immediately
revealSections[0].style.opacity = '1';
revealSections[0].style.transform = 'translateY(0)';

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Console message for developers
console.log('%c Portfolio Website ', 'background: #00ADB5; color: white; padding: 10px; font-size: 16px; border-radius: 5px;');
console.log('%c Built with HTML, CSS, JavaScript, and Tailwind CSS ', 'color: #00ADB5; font-size: 12px;');
console.log('%c Thanks for checking out my code! 🙌 ', 'color: #666; font-size: 12px;');

// Preload images for better performance
const imageUrls = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face'
];

imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
});

// Add click tracking for analytics (placeholder)
function trackClick(element, eventName) {
    // This is a placeholder - implement actual analytics tracking here
    console.log(`Tracked: ${eventName}`);
}

// Track external link clicks
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function() {
        trackClick(this, `External Link: ${this.href}`);
    });
});

// Track email clicks
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function() {
        trackClick(this, 'Email Link Clicked');
    });
});

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.error('Image failed to load:', this.src);
    });
});

// Performance optimization: Lazy load images
const lazyImages = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src') || img.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Update footer year dynamically
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}