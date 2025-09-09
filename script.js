// Modern Loading Animation
const main = document.querySelector("main");
const load = document.getElementById("load");
load.style.display = "flex";
load.classList.add("loader-text");

var i = 0;
var txt = '<RUPAM/>';
var speed = 80;

function typeWriter() {
    if (i < txt.length) {
        load.querySelector('.loader-text').innerText += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

setTimeout(() => {
    load.style.display = "none";
}, 2000);

// Modern Navigation and Scroll Effects
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
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

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about, .skills, .experience, .projects, .contact, .project-card, .timeline-item, .skill-category');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Modern Mobile Menu with smooth animations
var t = 1;
let menu = document.getElementById('menu');
let menu2 = document.getElementById("menu2");

if (menu && menu2) {
    menu.addEventListener("click", function() {
        console.log("click");
        if (t == 1) {
            menu.classList = "fa-solid fa-x fa-xl nav-toggle";
            t = 0;
            menu.style.transform = "rotate(180deg)";
            menu.style.transition = "transform 0.3s ease";
            menu2.style.display = "flex";
            menu2.style.animation = "slideInRight 0.3s ease forwards";
        } else {
            menu.classList = "fa-solid fa-bars fa-xl nav-toggle";
            t = 1;
            menu2.style.animation = "slideOutRight 0.3s ease forwards";
            setTimeout(() => {
                menu2.style.display = "none";
            }, 300);
            menu.style.transform = "rotate(0deg)";
            menu.style.transition = "transform 0.3s ease";
        }
    });
}

// Add CSS animations for mobile menu
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        background: rgba(102, 126, 234, 0.2);
        color: #667eea;
    }
`;
document.head.appendChild(style);

// Date functionality
const date = document.getElementById("date");
function getDate() {
    const yr = new Date().getFullYear();
    if (date) {
        date.innerText = yr;
    }
}
getDate();

// Modern Modal with smooth animations
function openModal() {
    const modal = document.getElementById("resumeModal");
    if (modal) {
        modal.style.display = "flex";
        modal.style.opacity = "0";
        modal.style.transform = "scale(0.8)";
        
        // Animate modal in
        setTimeout(() => {
            modal.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            modal.style.opacity = "1";
            modal.style.transform = "scale(1)";
        }, 10);
    }
}

function closeModal() {
    const modal = document.getElementById("resumeModal");
    if (modal) {
        modal.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        modal.style.opacity = "0";
        modal.style.transform = "scale(0.8)";
        
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById("resumeModal");
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Typing animation for hero subtitle
function initTypingAnimation() {
    const typingTexts = document.querySelectorAll('.typing-text');
    let currentIndex = 0;
    
    function typeText() {
        const currentText = typingTexts[currentIndex];
        const text = currentText.textContent;
        currentText.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                currentText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    eraseText();
                }, 2000);
            }
        }, 100);
    }
    
    function eraseText() {
        const currentText = typingTexts[currentIndex];
        const text = currentText.textContent;
        
        let i = text.length;
        const eraseInterval = setInterval(() => {
            if (i > 0) {
                currentText.textContent = text.substring(0, i - 1);
                i--;
            } else {
                clearInterval(eraseInterval);
                currentIndex = (currentIndex + 1) % typingTexts.length;
                setTimeout(() => {
                    typeText();
                }, 500);
            }
        }, 50);
    }
    
    if (typingTexts.length > 0) {
        typeText();
    }
}

// Initialize typing animation when DOM is loaded
document.addEventListener('DOMContentLoaded', initTypingAnimation);

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Smooth reveal animation for stats
function animateStats() {
    const stats = document.querySelectorAll('.stat h4');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                let currentValue = 0;
                const increment = finalValue / 50;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        target.textContent = finalValue + '+';
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(currentValue) + '+';
                    }
                }, 30);
                
                observer.unobserve(target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

document.addEventListener('DOMContentLoaded', animateStats);