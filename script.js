// Audio Player Functionality
class AudioPlayer {
    constructor(button) {
        this.button = button;
        this.audioId = button.getAttribute('data-audio');
        this.audio = document.getElementById(this.audioId);
        this.progressBar = button.parentElement.querySelector('.progress-bar');
        this.progressFill = button.parentElement.querySelector('.progress-fill');
        this.timeDisplay = button.parentElement.querySelector('.time-display');
        
        this.init();
    }
    
    init() {
        // Play/Pause functionality
        this.button.addEventListener('click', () => this.togglePlay());
        
        // Update progress bar
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        
        // Reset when ended
        this.audio.addEventListener('ended', () => this.resetPlayer());
        
        // Seek functionality
        this.progressBar.addEventListener('click', (e) => this.seek(e));
        
        // Pause other players when this one starts
        this.audio.addEventListener('play', () => this.pauseOthers());
    }
    
    togglePlay() {
        if (this.audio.paused) {
            this.audio.play();
            this.button.classList.add('playing');
        } else {
            this.audio.pause();
            this.button.classList.remove('playing');
        }
    }
    
    updateProgress() {
        const percent = (this.audio.currentTime / this.audio.duration) * 100;
        this.progressFill.style.width = percent + '%';
        this.timeDisplay.textContent = this.formatTime(this.audio.currentTime);
    }
    
    resetPlayer() {
        this.button.classList.remove('playing');
        this.progressFill.style.width = '0%';
        this.timeDisplay.textContent = '0:00';
    }
    
    seek(e) {
        const rect = this.progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        this.audio.currentTime = percent * this.audio.duration;
    }
    
    pauseOthers() {
        document.querySelectorAll('audio').forEach(audio => {
            if (audio !== this.audio) {
                audio.pause();
                const otherButton = document.querySelector(`[data-audio="${audio.id}"]`);
                if (otherButton) {
                    otherButton.classList.remove('playing');
                }
            }
        });
    }
    
    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
}

// Initialize all audio players
document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => new AudioPlayer(button));
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed nav
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Disable submit button
    const submitButton = contactForm.querySelector('.submit-button');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate form submission (replace with your actual form handling)
    // You can use services like Formspree, Netlify Forms, or your own backend
    try {
        const response = await fetch('https://formspree.io/f/mlgploqv', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
});

if (!response.ok) throw new Error('Failed');
        
        // Show success message
        formMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
        formMessage.className = 'form-message success';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
        
    } catch (error) {
        // Show error message
        formMessage.textContent = 'Oops! Something went wrong. Please try again or email me directly.';
        formMessage.className = 'form-message error';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--color-accent)';
        }
    });
});

// Add scroll reveal animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.demo-card, .service-card, .skill-tag');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});
