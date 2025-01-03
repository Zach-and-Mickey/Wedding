
        // Get the button and menu elements
        const menuBtn = document.getElementById('menuBtn');
        const dropdownMenu = document.getElementById('dropdownMenu');

        // Toggle dropdown menu visibility when the button is clicked
        menuBtn.addEventListener('click', () => {
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';  // Hide menu
            } else {
                dropdownMenu.style.display = 'block';  // Show menu
            }
        });
