document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector('.menu-btn');  // Button to toggle dropdown
    const dropdownMenu = document.querySelector('.dropdown-menu');  // Dropdown menu
    const dropdownButtons = dropdownMenu.querySelectorAll('button');  // Buttons inside the dropdown
    const sections = document.querySelectorAll('.tab-content');  // Content sections (to show/hide)

    // Toggle dropdown visibility
    menuBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('active');  // Show/hide dropdown
    });

    // Handle section selection and close dropdown
    dropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));

            // Show the selected section
            targetSection.classList.add('active');

            // Close the dropdown
            dropdownMenu.classList.remove('active');

            // Update active button styles
            dropdownButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});