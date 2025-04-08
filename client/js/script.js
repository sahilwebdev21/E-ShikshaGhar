// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Counter animation
document.addEventListener('DOMContentLoaded', () => {
    const animateCounters = () => {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            const target = +counter.dataset.count;
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if(current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + 
                        (counter.dataset.count.endsWith('00') ? '+' : '%');
                }
            }
            updateCounter();
        });
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate');
                if(entry.target.dataset.count) animateCounters();
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});

// Testimonial rotation
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    testimonials[testimonialIndex].classList.add('active');
}

// Start rotation every 5 seconds
setInterval(rotateTestimonials, 5000);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if(!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Instructor Filter Functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const instructorCards = document.querySelectorAll('.instructor-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter category
            const filter = button.textContent;
            
            // Filter instructors
            instructorCards.forEach(card => {
                const category = card.dataset.category;
                if(filter === 'All' || filter === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});