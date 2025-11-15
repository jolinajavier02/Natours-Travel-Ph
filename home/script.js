document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle (Inherited from previous)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Logic to change menu icon to 'x' when active
            const icon = navLinks.classList.contains('active') ? 'x' : 'menu';
            menuToggle.querySelector('i').setAttribute('data-feather', icon);
            feather.replace();
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').setAttribute('data-feather', 'menu');
                feather.replace();
            });
        });
    }

    // 2. Simple Form Submission Handling (Prevent actual submission/server-side save)
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default browser form submission

            // Simulate "Saving" or "Submitting" the data
            contactForm.reset(); // Clear the form fields
            formMessage.innerHTML = 'Thank you! Your message has been received. We will contact you shortly.';
            formMessage.style.color = var(--color-primary-green);
            
            // Clear message after a few seconds
            setTimeout(() => {
                formMessage.innerHTML = '';
            }, 5000);
        });
    }
    
    // Initialize Feather Icons
    feather.replace();
});