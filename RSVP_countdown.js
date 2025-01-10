
        // Set the date we're counting down to (Example: wedding date)
        const targetDate = new Date("2025-04-15T23:59:59").getTime();

        // Update the countdown every 1 second
        const countdownInterval = setInterval(function() {
            // Get the current date and time
            const now = new Date().getTime();

            // Calculate the time remaining
            const timeLeft = targetDate - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Display the result
            document.getElementById("countdown").innerHTML =
                days + "\n days\n " + hours + "\n hours\n" + minutes + "\n minutes\n";

            // If the countdown is finished, display a message
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);  // Stop the timer
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);

