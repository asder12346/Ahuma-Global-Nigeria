        // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });

        // Initialize Feather Icons
        feather.replace();

        // Mobile Menu Toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileNav = document.getElementById('mobile-nav');

        mobileMenu.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
            feather.replace();
        });

        // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');

        themeToggle.addEventListener('click', () => {
            // For this design, we're keeping the dark green theme as default
            // This could be enhanced to switch between light and dark variants
            alert('Theme toggle functionality can be customized further based on requirements');
        });

        // Smooth Scroll for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    mobileNav.classList.add('hidden');
                }
            });
        });

        // Form Submission
        const contactForm = document.getElementById('contact-form');
        const formSuccess = document.getElementById('form-success');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation and success message
            formSuccess.classList.remove('hidden');
            
            // Reset form
            setTimeout(() => {
                contactForm.reset();
                formSuccess.classList.add('hidden');
            }, 5000);
            
            // Add button press effect
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.classList.add('scale-95');
            setTimeout(() => {
                submitBtn.classList.remove('scale-95');
            }, 100);
        });

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            const scrollToTop = document.getElementById('scroll-to-top');
            
            if (window.scrollY > 100) {
                header.classList.add('bg-opacity-95');
                scrollToTop.classList.remove('opacity-0');
            } else {
                header.classList.remove('bg-opacity-95');
                scrollToTop.classList.add('opacity-0');
            }
        });

        // Scroll to Top functionality
        document.getElementById('scroll-to-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // GSAP micro-interactions
        gsap.from('.hero-bg', {
            scale: 1.1,
            duration: 1.2,
            ease: "power2.out"
        });