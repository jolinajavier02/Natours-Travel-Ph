document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Change menu icon to 'x' when active
            if (navLinks.classList.contains('active')) {
                menuToggle.querySelector('i').setAttribute('data-feather', 'x');
            } else {
                menuToggle.querySelector('i').setAttribute('data-feather', 'menu');
            }
            feather.replace(); // Re-render feather icons
        });

        // Close menu when a link is clicked (for smooth scrolling)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').setAttribute('data-feather', 'menu');
                feather.replace();
            });
        });
    }

    // Feather icons are initialized at the bottom of index.html
    // but the mobile toggle needs to re-initialize them on click.
});