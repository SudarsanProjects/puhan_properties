// Placeholder for JavaScript functionality
// This script will handle form submissions, validations, and potentially other interactive elements.

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const mobile = document.getElementById('mobile').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !mobile) {
                formMessage.textContent = 'Please fill in all required fields (Name, Mobile Number).';
                formMessage.style.color = 'red';
                formMessage.classList.remove('hidden');
                return;
            }

            // Construct message for WhatsApp or Email
            let formattedMessage = "Hello Puhan Properties,\n\n";
            formattedMessage += "I would like to inquire about a property.\n";
            formattedMessage += `My name is: ${name}\n`;
            formattedMessage += `My mobile number is: ${mobile}\n`;
            if (email) {
                formattedMessage += `My email is: ${email}\n`;
            }
            if (message) {
                formattedMessage += `Message: ${message}\n`;
            }
            formattedMessage += `\nThank you.`;

            // Option 1: Open WhatsApp (preferred)
            // Replace with your actual WhatsApp number
            const whatsappNumber = '918658729842'; 
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
            window.open(whatsappUrl, '_blank');

            // Option 2: Fallback to mailto if WhatsApp is not desired or fails
            // const mailtoLink = `mailto:info@puhanproperties.com?subject=${encodeURIComponent('Property Inquiry from Website')}&body=${encodeURIComponent(formattedMessage)}`;
            // window.location.href = mailtoLink;

            formMessage.textContent = 'Thank you for your inquiry! We will contact you shortly via WhatsApp.';
            formMessage.style.color = 'green';
            formMessage.classList.remove('hidden');
            contactForm.reset(); // Clear the form
        });
    }

    // Smooth scrolling for navigation links (optional, but good for UX)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.hostname === window.location.hostname && this.pathname === window.location.pathname) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Highlight active nav link (basic example for single-page style navigation)
    const highlightActiveLink = () => {
        const currentPath = window.location.pathname.split('/').pop();
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    };

    highlightActiveLink();
    // Re-highlight on hash change for same-page navigation, or other events as needed
    window.addEventListener('hashchange', highlightActiveLink);
    window.addEventListener('scroll', highlightActiveLink); // For more dynamic highlighting based on scroll position

});
