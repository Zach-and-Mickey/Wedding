window.addEventListener('load', function() {
    // Apply the fade-in class immediately after the page is loaded
 // A small delay to allow the class to be added before any content is shown
document.body.classList.add('fade-in')

    // Select all anchor links
    const links = document.querySelectorAll('a');

    // Add event listeners for each link
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            const targetUrl = link.href; // Get the URL of the clicked link

            // Add the fade-out class to trigger fade-out effect
            document.body.classList.add('fade-out');
	    document.body.classList.remove('fade-in');

            // Wait for the fade-out to complete (1.5 seconds)
            setTimeout(function() {
                // After the fade-out, navigate to the new page
                window.location.href = targetUrl;
            }, 750); // Ensure this matches the fade-out duration
        });
    });
});
