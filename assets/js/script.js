// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background color change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'var(--hawk-purple)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });

    // Initialize tooltips if using Bootstrap's tooltip component
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});


function copyToClipboard(element) {
    const textToCopy = element.getAttribute('data-copy'); // Get the text from the data-copy attribute
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Show a success message (optional)
        const originalText = element.innerHTML;
        element.innerHTML = '<span style="color: #AA95C7;">Copied!</span>';
        setTimeout(() => {
            element.innerHTML = originalText;
        }, 1500);
    }).catch((err) => {
        console.error('Could not copy text: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Handle arrow rotation for all collapsible sections
    document.querySelectorAll('.collapse').forEach(collapseEl => {
        collapseEl.addEventListener('show.bs.collapse', function() {
            const arrow = this.previousElementSibling.querySelector('.collapsible-arrow');
            arrow.classList.add('expanded');
        });
        
        collapseEl.addEventListener('hide.bs.collapse', function() {
            const arrow = this.previousElementSibling.querySelector('.collapsible-arrow');
            arrow.classList.remove('expanded');
        });
    });
});